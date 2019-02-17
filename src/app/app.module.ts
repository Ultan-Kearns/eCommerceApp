import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component'; 
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component'; 
  import { RetrieveService } from './services/retrieve.service';
  import { AuthenticationService } from './services/authentication.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 import { MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    SupportComponent,
    CategoriesComponent,
    DealsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
<<<<<<< HEAD
    MatExpansionModule,

=======
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
>>>>>>> feature
    
  ],
  providers: [RetrieveService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
