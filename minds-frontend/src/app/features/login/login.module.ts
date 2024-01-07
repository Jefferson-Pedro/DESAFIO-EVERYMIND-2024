import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';


@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    FormLoginComponent
  ]
})
export class LoginModule { }
