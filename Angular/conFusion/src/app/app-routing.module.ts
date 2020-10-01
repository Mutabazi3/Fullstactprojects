import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DishdetailComponent} from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [

  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "aboutus", component: ContactusComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
