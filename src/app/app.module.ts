//imports for components and services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { DealsComponent } from './deals/deals.component'; 
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component'; 
import { RetrieveService } from './services/retrieve.service';
import { BugPostService } from './services/bugpost.service';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BooksComponent } from './books/books.component';
import { SportsComponent } from './sports/sports.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    SupportComponent,
    DealsComponent,
    LoginComponent,
    ElectronicsComponent,
    BooksComponent,
    SportsComponent,
    OutdoorsComponent,
    ItemComponent,
    CartComponent,
    RegisterComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule,
    HttpModule,
    MatFormFieldModule,
    MatTooltipModule,
    
  ],
  providers: [RetrieveService,AuthenticationService,HttpClientModule,BugPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
