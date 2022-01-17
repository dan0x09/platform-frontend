import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.url.indexOf('blob.core.windows.net') != -1) {
            return next.handle(request);
        }
        const token = this.auth.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`,
                },
            });
        }
        return next.handle(request).pipe(
            tap((res) => {
                if (res instanceof HttpResponse) {
                    console.log(res);

                    const header = res.headers.get('x-authorization');
                    if (header) {
                        const token = header.substr(7);
                        this.auth.setToken(token);
                    }
                }
            })
        );
    }
}
