import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[appTest]"
})
export class TestDirective{

     @Input() appTest: string = "";
     @Input() size: string = "30px";

    constructor(
        private el:ElementRef
    ){
       this.el.nativeElement.style.backgroundColor = "yellow";
    }

    @HostListener("mouseenter") mouseenter(){
        this.el.nativeElement.style.backgroundColor = this.appTest;
        this.el.nativeElement.style.color = "black";
        this.el.nativeElement.style.fontSize = this.size;
    }

    @HostListener("mouseleave") mouseleave(){
        this.el.nativeElement.style.backgroundColor = "Black";
        this.el.nativeElement.style.color = "white";
       this.el.nativeElement.style.fontSize = "2em";
    }
}