import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login';
import { FormRegisterComponent } from './components/form-register';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'entrar' },

  {path: 'entrar', component: FormLoginComponent},
  
  {path: 'cadastro-usuario', component: FormRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
