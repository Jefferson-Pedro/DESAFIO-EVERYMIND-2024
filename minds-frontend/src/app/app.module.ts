import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoginModule } from './features/login';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './features/products/products.module';
import { ProductRoutingModule } from './features/products/product-routing.module';
import { LoginService } from './features/login/services';
import { ShowHideDirective } from './shared/directives/show-hide.directive';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductRoutingModule,
    CoreModule,
    LoginModule,
    ProductsModule,
    SharedModule

  ],
  providers: [{ provide: Location, useClass: Location }, LoginService, ShowHideDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
