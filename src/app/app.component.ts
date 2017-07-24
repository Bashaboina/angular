import {Component} from "@angular/core";
import {HeroComponent} from "./hero.component";

@Component ({
    selector: "my-app",
    template: `
    <h1>{{pageTitle}}</h1>
    <nav>
        <a routerLink="/dashboard"> Dashboard </a>
        <a routerLink="/heroes">Heroes</a>
    </nav>
    
   <router-outlet></router-outlet>
    <my-heroes> </my-heroes>
    `
})
export class AppComponent {
    pageTitle:string = "Tour of heroes";
};