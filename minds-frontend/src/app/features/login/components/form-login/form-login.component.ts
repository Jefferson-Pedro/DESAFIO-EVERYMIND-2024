import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/service/notification';
import { LoginService } from '../../services';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {


  private user!: User;
  public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);
  protected loginService = inject(LoginService);
  protected notification = inject(NotificationService);
  protected formLogin = this.buildForm();


  constructor() {}

  private buildForm(){
    return this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  private createUserPayLoad(): User{
    const form = this.formLogin.getRawValue();
    return{
      login: form.login,
      senha: form.senha
    }
  }

  public onSubmit() {
    this.user = this.createUserPayLoad();
    console.log(this.user);
    this.loginService.login(this.user).subscribe({
      next: (res) => {
            console.log('Usuário existe', res);
            // this.isLogger = true;
            this.router.navigate(['produtos/lista-de-produtos']);
            this.notification.showMessageSucess('Seja bem vindo!');
      },
      error: (err) => {
        console.log('Ocorreu um erro ao realizar o login', err);
        this.notification.showMessageFail(
          'Usuário e/ou senha invalidos!')
      }
    });
  }
}
