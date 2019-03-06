import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { DealsComponent } from './deals/deals.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';
import  {OutdoorsComponent } from './outdoors/outdoors.component';
import { SportsComponent} from './sports/sports.component';
import {BooksComponent} from './books/books.component';
import {ElectronicsComponent} from './electronics/electronics.component';
import { RegisterComponent } from './register/register.component'; 
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ForgotComponent } from './forgot/forgot.component';
const routes: Routes = [
   	{path: 'homepage',component: HomepageComponent},
   	{path: 'about',component: AboutComponent},
	{path: 'deals',component: DealsComponent},
	{path: 'support',component: SupportComponent},
	{path: 'login', component: LoginComponent},
	{path: 'outdoor', component: OutdoorsComponent},
	{path: 'sports', component: SportsComponent},
	{path: 'books', component: BooksComponent},
	{path: 'electronics', component: ElectronicsComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'item', component: ItemComponent},
	{path: 'cart', component: CartComponent},
	{path: 'account', component: AccountComponent},
	{path: 'forgot', component: ForgotComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
