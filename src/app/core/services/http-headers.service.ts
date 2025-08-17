import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService {
  getCommonHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'securityKey': environment.SECURITY_KEY
    });
  }

  getAuthHeaders(token: string): HttpHeaders {
    return this.getCommonHeaders().set('Authorization', `Bearer ${token}`);
  }
}