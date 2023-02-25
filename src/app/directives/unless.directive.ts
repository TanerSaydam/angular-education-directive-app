import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective { 

  @Input() set appUnless(isActive: boolean){
    if(!isActive){
      this.viewConainer.clear();
    }else{
      this.viewConainer.createEmbeddedView(this.templateRef);      
    }
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewConainer: ViewContainerRef
  ) { }

  

}
