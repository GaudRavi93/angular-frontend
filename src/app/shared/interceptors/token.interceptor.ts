import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
  
@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  intercept = (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    const idToken = localStorage.getItem('idToken');
    const cloned = request.clone({
      setHeaders: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return next.handle(cloned);
  };
}
  