import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    PageNotfoundComponent
  ],
  imports: [
    CoreRoutingModule,
    CommonModule
  ],
  exports:[]
})
export class CoreModule { }
