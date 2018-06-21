import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {AdminLoginService} from '../service/admin-login.service';
import {GigsComponent} from '../gigs/gigs.component';



const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'admin-login', component: AdminLoginService},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'gigs', component: GigsComponent}
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
