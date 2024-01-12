import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User';
import { LoginService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {

  private user!: User;
  public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);
  protected loginService = inject(LoginService);
  protected formLogin = this.buildForm();


  constructor() {}

  private buildForm(){
    return this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  private createNewUserPayLoad(): User{
    const form = this.formLogin.getRawValue();
    return{
      login: form.login,
      senha: form.senha
    }
  }

  public onSubmit() {
    this.user = this.createNewUserPayLoad();
    console.log(this.user);
    

  }
}
