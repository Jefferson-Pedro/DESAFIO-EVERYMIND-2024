import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PageNotfoundComponent,
    LoaderComponent
  ],
  imports: [
    MatButtonModule,
    CoreRoutingModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports:[
    LoaderComponent, PageNotfoundComponent
  ]
})
export class CoreModule { }
