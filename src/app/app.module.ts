import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    SupportComponent,
    CategoriesComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
