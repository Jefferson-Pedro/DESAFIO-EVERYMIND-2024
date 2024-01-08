import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoginModule } from './features/login';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    ProductsModule,
    SharedModule

  ],
  providers: [{ provide: Location, useClass: Location },],
  bootstrap: [AppComponent]
})
export class AppModule { }
