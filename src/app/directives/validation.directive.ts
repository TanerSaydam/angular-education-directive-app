import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {

  @Input() appValidation: boolean = false;
  constructor(
    private _el: ElementRef<HTMLInputElement>
  ) { }

  @HostListener("keyup") keyup(){
    let element = this._el.nativeElement;
    element.className = "";
    if(this.appValidation)
      element.className = "form-control is-valid";
    else
      element.className = "form-control is-invalid";
  }

}
