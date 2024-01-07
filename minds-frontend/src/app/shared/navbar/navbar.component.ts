import { Component, inject } from '@angular/core';
import { NavService } from '../service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  //protected navService = inject(NavService); 

  constructor(protected navService: NavService){}

}
