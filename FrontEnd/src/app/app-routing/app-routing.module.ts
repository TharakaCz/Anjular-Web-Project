import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {AdminLoginService} from '../service/admin-login.service';
import {GigsComponent} from '../gigs/gigs.component';

import {AdminLoginComponent} from '../admin-login/admin-login.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'gigs', component: GigsComponent},
  {path: 'admin-login', component: AdminLoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
