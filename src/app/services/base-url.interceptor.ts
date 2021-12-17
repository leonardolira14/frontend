import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class BaseURLInterceptor implements HttpInterceptor{
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        console.log(req.url);

        const url = `${environment.baseURL}${req.url}`.replace(/([^:]\/)\/+/g, '$1');
        console.log(url);
        req = req.clone({  url });
        return next.handle(req);
    }
}
