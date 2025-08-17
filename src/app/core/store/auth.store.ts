import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthApiService } from "../api/auth-api.service";

@Injectable({
  providedIn: "root",
})
export class AuthStore {
  private readonly authApiService = inject(AuthApiService);
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser") || "{}")
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.authApiService.login(username, password)
      .pipe(
        map((user) => {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next({});
  }

  isAuthenticated(): boolean {
    return this.currentUserValue && this.currentUserValue.token ? true : false;
  }
}
