import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../core/store/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private router: Router,
    private authStore: AuthStore
  ) {}

  canActivate(): boolean {
    if (!this.authStore.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
