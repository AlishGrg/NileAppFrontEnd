import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SigninpassComponent } from './signinpass/signinpass.component';
import { MobileComponent } from './categories/mobile/mobile.component';
import { ElectronicsComponent } from './categories/electronics/electronics.component';
import { NewreleasesComponent } from './categories/newreleases/newreleases.component';
import { BooksComponent } from './categories/books/books.component';
import { HomenkitchenComponent } from './categories/homenkitchen/homenkitchen.component';
import { ComputersComponent } from './categories/computers/computers.component';
import { DealsComponent } from './categories/deals/deals.component';
import { ToysngamesComponent } from './categories/toysngames/toysngames.component';
import { BuyComponent } from './buy/buy.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './categories/show/show.component';
import { AddComponent } from './categories/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,
    SigninpassComponent,
    MobileComponent,
    ElectronicsComponent,
    NewreleasesComponent,
    BooksComponent,
    HomenkitchenComponent,
    ComputersComponent,
    DealsComponent,
    ToysngamesComponent,
    BuyComponent,
    ShowComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
