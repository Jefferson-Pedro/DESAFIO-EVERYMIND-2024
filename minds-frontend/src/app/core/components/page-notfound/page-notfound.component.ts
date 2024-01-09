import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.scss']
})
export class PageNotfoundComponent {
  private router = inject(Router);

  public constructor(){}

  public navigateProduct(): void{
    this.router.navigate(['produtos/lista-de-produtos']);
  }
}
