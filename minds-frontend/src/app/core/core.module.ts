import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
