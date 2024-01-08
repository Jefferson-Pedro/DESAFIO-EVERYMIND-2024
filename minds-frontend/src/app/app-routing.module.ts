import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './features/products/products.module';
import { PageNotfoundComponent } from './core/components/page-notfound/page-notfound.component';
import { FormLoginComponent } from './features/login/components/form-login';
//import { ListProductComponent } from './features/products/components/list-product/list-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirecionamento para '/home' quando o caminho estiver vazio

  {path: 'login', component: FormLoginComponent},

  {path: 'produtos', loadChildren: () =>
    import('./features/products/products.module').then(
      (module) => module.ProductsModule)},

  {path: '**', component: PageNotfoundComponent}

  //{path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
