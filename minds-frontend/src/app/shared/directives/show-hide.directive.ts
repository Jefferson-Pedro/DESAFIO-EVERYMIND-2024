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
      if (e instanceof ResolveEnd) {
        this.shouldShowHeaderAndFooter = !e.urlAfterRedirects.includes('http://localhost:4200/auth/entrar');
        this.renderer.addClass(this.el.nativeElement, 'hidden');
        console.log('Retorno da Diretiva:', this.shouldShowHeaderAndFooter);
      }else{
        this.renderer.removeClass(this.el.nativeElement, 'hidden');
      }
    });
  } 
}
