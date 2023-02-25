import { AfterContentInit, AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appTanerRoute]'
})
export class TanerRouteDirective {

  @Input() appTanerRoute: string = "";
  @Input() appActiveRoute: string = "";
  constructor(
    private _router: Router,    
    private _el: ElementRef<HTMLLinkElement>
  ) { 
    
  }

  ngAfterContentChecked(): void {    
    this._el.nativeElement.className = "";
    if(this._router.url === (this.appTanerRoute)){
      this._el.nativeElement.className = this.appActiveRoute;
    }else{
      this._el.nativeElement.className = "";
    }
  }   

  @HostListener("click") click(){
    this._router.navigateByUrl("/" + this.appTanerRoute);
  }

}
