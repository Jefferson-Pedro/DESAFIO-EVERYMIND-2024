import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from 'src/app/core/core.module';
import { ProductRoutingModule } from './product-routing.module';
;



@NgModule({
  declarations: [
    FormProductComponent,
    ListProductComponent
  ],
  imports: [
    ProductRoutingModule,
    HttpClientModule,
    CoreModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    FormProductComponent,
    ListProductComponent
  ],
  providers:[]
})
export class ProductsModule { }
