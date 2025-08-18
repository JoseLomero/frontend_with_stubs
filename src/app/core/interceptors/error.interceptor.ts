import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Client error: ${error.error.message}`;

        } else if (error.status === 0) {
          // Network error
          errorMessage = 'Unable to connect to the server. Please check your internet connection.';

        } else if (error.status === 404) {
          errorMessage = 'The requested resource was not found.';
          
        } else if (error.status >= 400 && error.status < 500) {
          // Client error (4xx)
          errorMessage = error.error?.message || `Request error: ${error.status} ${error.statusText}`;

        } else if (error.status >= 500) {
          // Server error (5xx)
          errorMessage = 'A server error occurred. Please try again later.';

        } else {
          // Other errors
          errorMessage = error.error?.message || error.message || 'An unexpected error occurred';
        }
        
        console.error('HTTP Error:', {
          url: request.url,
          status: error.status,
          message: error.message,
          error: error.error
        });
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
