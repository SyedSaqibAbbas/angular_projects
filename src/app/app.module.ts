import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { AddcatComponent } from './dash/addcat/addcat.component';
import { CatComponent } from './dash/cat/cat.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CatService } from './_service/cat.service';

const routes:Routes=[
  { path:'dash', component:DashComponent},
  { path:'addcat', component:AddcatComponent},
  { path:'cat', component:CatComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    AddcatComponent,
    CatComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
