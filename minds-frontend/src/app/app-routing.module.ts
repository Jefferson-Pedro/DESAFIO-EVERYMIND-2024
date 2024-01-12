import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './features/products/products.module';
import { LoginModule } from './features/login';
import { PageNotfoundComponent } from './core/components/page-notfound/page-notfound.component';



const routes: Routes = [
  { path: '', redirectTo: 'auth/entrar', pathMatch: 'full' }, // Redirecionamento para '/home' quando o caminho estiver vazio

  {path: 'produtos', loadChildren: () =>
    import('./features/products/products.module').then(
      (module) => module.ProductsModule)},

  {path: 'auth', loadChildren: () =>
    import('./features/login').then(
      (module) => module.LoginModule)},

  {path: '**', component: PageNotfoundComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
