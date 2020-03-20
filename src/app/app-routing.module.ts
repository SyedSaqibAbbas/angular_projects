import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AddcatComponent } from './dash/addcat/addcat.component';
import { CatComponent } from './dash/cat/cat.component';



const routes: Routes = [
 { path:'dash', component:DashComponent, 
  children:[
  {path:'', redirectTo:'default', pathMatch:'full'},
   {path: 'addcat', component:AddcatComponent},
  {path:'cat', component:CatComponent},
    ]}
];  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
