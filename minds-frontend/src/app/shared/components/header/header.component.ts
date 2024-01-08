import { Component, inject } from '@angular/core';
import { NavService } from '../../service/nav-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  //protected navService = inject(NavService);
  showMenu: boolean = true;

  constructor(protected navService: NavService){}
}
