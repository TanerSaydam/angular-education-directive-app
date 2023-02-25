import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestDirective } from './directives/test.directive';
import { ValidationDirective } from './directives/validation.directive';
import { TanerRouteDirective } from './directives/taner-route.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    ValidationDirective,
    TanerRouteDirective,
    HomeComponent,
    AboutComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
