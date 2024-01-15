import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User';
import { LoginService } from '../../services';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/service/notification';

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
  protected notification = inject(NotificationService);
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

    this.loginService.createUser(this.user).subscribe({
      next:(res) => {
        console.log('Deu tudo certo!', res);
        this.notification.showMessageSucess('Usuário cadastrado com sucesso!');
        this.router.navigate(['/auth/entrar']);
      },
      error:(err) => {
        console.log('Deu algo errado', err); 
        this.notification.showMessageFail(
          'Usuário já existe, tente novamente!')
      }
    });
  }
}
