import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SliderComponent} from './slider/slider.component';
import {JumbotroneComponent} from './jumbotrone/jumbotrone.component';
import {WelcomeSectionComponent} from './welcome-section/welcome-section.component';
import {GoleComponent} from './gole/gole.component';
import {SectionComponent} from './section/section.component';
import {FixedAreaComponent} from './fixed-area/fixed-area.component';
import {TeamComponent} from './team/team.component';
import {ProggressComponent} from './proggress/proggress.component';
import {PhilosophyComponent} from './philosophy/philosophy.component';
import {GigSliderComponent} from './gig-slider/gig-slider.component';
import {ConnectComponent} from './connect/connect.component';
import {CommentsComponent} from './comments/comments.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {FooterComponent} from './footer/footer.component';


import {RegisterComponent} from './register/register.component';

import {AdminLoginComponent} from './admin-login/admin-login.component';
import {PostService} from './service/post.service';
import {AdminLoginService} from './service/admin-login.service';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { GigsComponent } from './gigs/gigs.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    JumbotroneComponent,
    WelcomeSectionComponent,
    GoleComponent,
    SectionComponent,
    FixedAreaComponent,
    TeamComponent,
    ProggressComponent,
    PhilosophyComponent,
    GigSliderComponent,
    ConnectComponent,
    CommentsComponent,
    AboutUsComponent,
    FooterComponent,
    RegisterComponent,
    AdminLoginComponent,
    HomePageComponent,
    GigsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PostService,
    AdminLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
