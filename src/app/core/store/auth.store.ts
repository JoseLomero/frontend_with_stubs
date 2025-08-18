import { inject, Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthApiService } from "../api/auth-api.service";

@Injectable({
  providedIn: "root",
})
export class AuthStore {
  private readonly authApiService = inject(AuthApiService);
  private _currentUser = signal<any>(undefined);
  public currentUser = this._currentUser.asReadonly();

  constructor() {
    this._currentUser = signal<any>(
      JSON.parse(localStorage.getItem("currentUser") || "{}")
    );
  }

  public get currentUserValue(): any {
    return this._currentUser();
  }

  login(username: string, password: string): Observable<any> {
    return this.authApiService.login(username, password)
      .pipe(
        map((user) => {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this._currentUser.set(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem("currentUser");
    this._currentUser.set({});
  }

  isAuthenticated(): boolean {
    return this.currentUserValue && this.currentUserValue.token ? true : false;
  }
}
