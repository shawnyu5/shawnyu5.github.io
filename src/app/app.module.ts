// import "bootswatch/dist/[theme]/bootstrap.min.css";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
   declarations: [AppComponent, NavBarComponent, HomePageComponent],
   imports: [BrowserModule, AppRoutingModule, NgbModule],
   exports: [NavBarComponent],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
