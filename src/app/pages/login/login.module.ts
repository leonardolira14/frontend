import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';



import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseURLInterceptor } from '../../services/base-url.interceptor';
import { HttpErrorInterceptor } from '../../services/http-error.interceptor';

@NgModule({
  declarations: [LoginComponent, ForgotpasswordComponent, ResetpasswordComponent],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true
    }
  ],
})
export class LoginModule { }
