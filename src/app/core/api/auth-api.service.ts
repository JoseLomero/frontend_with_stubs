import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpHeadersService } from "../services/http-headers.service";

@Injectable({
  providedIn: "root",
})
export class AuthApiService {
  private readonly API_URL = environment.API_URL;
  private readonly http = inject(HttpClient);
  private readonly headersService = inject(HttpHeadersService);

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.API_URL}/login`,
        { username, password },
        { headers: this.headersService.getCommonHeaders() }
      )
  }
}
