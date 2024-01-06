import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';



@NgModule({
  declarations: [
    FormProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
