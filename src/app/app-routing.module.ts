import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContComponent } from './cont/cont.component';
import { AboutComponent } from './about/about.component';
import { AppointComponent } from './appoint/appoint.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'cont',component:ContComponent},
  {path:'about',component:AboutComponent },
  {path:'appoint',component:AppointComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
