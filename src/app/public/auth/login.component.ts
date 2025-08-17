import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthStore } from '../../core/store/auth.store';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private authStore: AuthStore,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authStore.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.errorMessage = '';
    this.loading = true;

    this.authStore.login(this.model.username, this.model.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: error => {
          this.errorMessage = this.getUserFriendlyError(error);
          this.loading = false;
          console.error('Login failed:', error);
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

  private getUserFriendlyError(error: any): string {
    if (error.status === 401) {
      return 'Username or password incorrect';
    } else if (error.status === 0) {
      return 'No connection to server. Verify your connection';
    } else {
      return 'Error during login. Try again';
    }
  }
}
