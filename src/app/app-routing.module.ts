import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/homepage.component';
const routes: Routes = [
    {path: 'home',component: HomeComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
