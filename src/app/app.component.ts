import {Component} from "@angular/core";
import {HeroesComponent} from "./heroes.component";

@Component ({
    selector: "my-app",
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/remits" routerLinkActive="active">Remits</a>
  </nav>
  <router-outlet></router-outlet>
`,
    styleUrls:["./app.component.css"]
})
export class AppComponent {
    pageTitle:string = "Tour of heroes";
};