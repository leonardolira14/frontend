import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptor implements HttpInterceptor{
    constructor(
        private errorService: ErrorService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError(error => {
                console.log(error);
                let errorMessage = '';
                let objecterror = [];
                if (error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Client-side error: ${error.error.message}`;

                } else {
                    errorMessage = `Server-side error: ${error.status} ${error.message}}`;
                    objecterror = error.error;
                }
                // aqui mandamos el error
                this.errorService.logSomeMessage(errorMessage, objecterror, error.status);
                return throwError(errorMessage);
            })
        );
    }
}
