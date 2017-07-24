import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroComponent } from './hero.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      }
    ]
    )
  ],
  providers: [
    HeroService
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}


