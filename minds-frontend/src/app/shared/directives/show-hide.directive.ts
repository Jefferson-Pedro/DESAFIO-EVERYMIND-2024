import { Directive, ElementRef, Renderer2, inject } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoginService } from 'src/app/features/login/services';

@Directive({
  selector: '[appShowHide]'
})
export class ShowHideDirective {

  private router = inject(Router);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);
  private loginService = inject(LoginService);

  private shouldShowHeaderAndFooter!: boolean;
  

  constructor() { }

  ngOnInit() {
    return this.setShowHeaderFooter();
  }

  private setShowHeaderFooter(): void {
    this.router.events.pipe(filter(event => event instanceof ResolveEnd)).subscribe((e) => {
      console.log('Parametro e:', e);
      if (e instanceof ResolveEnd) {
        // Invertendo a lógica para esconder quando "/auth/entrar" está presente
        this.shouldShowHeaderAndFooter = !e.urlAfterRedirects.includes('/auth/entrar');
        this.el.nativeElement.style.display = this.shouldShowHeaderAndFooter ? 'block' : 'none';
        console.log('Retorno da Diretiva:', this.shouldShowHeaderAndFooter);
      }
    });
  }
}
