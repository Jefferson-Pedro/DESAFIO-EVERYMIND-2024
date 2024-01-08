import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';


const routes: Routes = [
  
  {path: 'lista-de-produtos', component: ListProductComponent},

  { path: 'novo-produto', component: FormProductComponent },

  { path: 'editar-produto/:id', component: FormProductComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
