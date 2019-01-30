import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component';
import { SupportComponent } from './support/support.component';
const routes: Routes = [
   	{path: 'homepage',component: HomepageComponent},
   	{path: 'about',component: AboutComponent},
   	{path: 'categories', component: CategoriesComponent},
	{path: 'deals',component: DealsComponent},
	{path: 'support',component: SupportComponent},
	];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
