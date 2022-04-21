import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './categories/books/books.component';
import { ComputersComponent } from './categories/computers/computers.component';
import { ElectronicsComponent } from './categories/electronics/electronics.component';
import { HomenkitchenComponent } from './categories/homenkitchen/homenkitchen.component';
import { MobileComponent } from './categories/mobile/mobile.component';
import { NewreleasesComponent } from './categories/newreleases/newreleases.component';
import { ToysngamesComponent } from './categories/toysngames/toysngames.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SigninpassComponent } from './signinpass/signinpass.component';
import { SignupComponent } from './signup/signup.component';
import { BuyComponent } from './buy/buy.component';
import { ShowComponent } from './categories/show/show.component';
import { AddComponent } from './categories/add/add.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},
  {path:'signinpass',component:SigninpassComponent},
  {path:'categories/books',component:BooksComponent},
  {path:'categories/computers',component:ComputersComponent},
  {path:'categories/electronics',component:ElectronicsComponent},
  {path:'categories/homenkitchen',component:HomenkitchenComponent},
  {path:'categories/mobile',component:MobileComponent},
  {path:'categories/newreleases',component:NewreleasesComponent},
  {path:'categories/toysngames',component:ToysngamesComponent},
  {path:'categories/deals',component:NewreleasesComponent},
  {path:'categories/show',component:ShowComponent},
  {path:'categories/add',component:AddComponent},
  {path:'buy',component:BuyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
