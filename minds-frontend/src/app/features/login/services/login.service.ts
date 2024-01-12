import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { NotificationService } from 'src/app/shared/service/notification';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAuth!: boolean
  private router = inject(Router);
  private notification = inject(NotificationService);

  showComponents = new EventEmitter<boolean>();

  constructor() { }


  public login(user: User): void{
    if(user.login === 'usuario@email.com' &&
    user.senha === '123456'){
      this.userAuth = true;
      this.router.navigate(['produtos/lista-de-produtos']);
      this.notification.showMessageSucess(
        'Seja bem vindo!'
      );

    }else{
      this.notification.showMessageFail(
        'Usuário e/ou senha invalidos!'
      );
      this.showComponents.emit(false);
      this.userAuth = false;
    }
  }

  public registerNewUser(){}

  public getUserAuth(): boolean{
    return this.userAuth;
  }
}
