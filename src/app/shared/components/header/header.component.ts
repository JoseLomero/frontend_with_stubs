import { Component } from '@angular/core';
import { AuthStore } from 'src/app/core/store/auth.store';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private authStore: AuthStore,
    private router: Router
  ) {}

  logout(): void {
    this.authStore.logout();
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return !!this.authStore.currentUserValue?.token;
  }

  get userName(): string {
    return this.authStore.currentUserValue?.username || '';
  }

  get userEmail(): string {
    return this.authStore.currentUserValue?.email || '';
  }
}
