import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { BaseURLInterceptor } from './services/base-url.interceptor';
import { HttpErrorInterceptor } from './services/http-error.interceptor';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    
    { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS, useClass:HttpErrorInterceptor,multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
