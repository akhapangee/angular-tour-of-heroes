import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
  {path:'heroes', component:HeroesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  // The @NgModule metadata initializes the router and starts it listening for browser location changes.
  // The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():
  imports: [RouterModule.forRoot(routes)],

  // AppRoutingModule exports RouterModule to be available throughout the application.
  exports: [RouterModule]
})
export class AppRoutingModule { }
