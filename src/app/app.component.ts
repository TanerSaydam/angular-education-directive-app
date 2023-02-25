import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive: boolean = false;
  // title = 'directive-app';

  // color: string = "";

  // addForm: FormGroup = new FormGroup({
  //   firstName: new FormControl("",[Validators.required, Validators.minLength(3)])
  // })

  // changeColor(color: string){
  //   this.color = color;
  // }
}
