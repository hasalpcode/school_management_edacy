import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './frontoffice/components/home/home.component';
import { EtudiantComponent } from './frontoffice/components/etudiant/etudiant.component';
import { ClasseComponent } from './frontoffice/components/classe/classe.component';
import { FormsModule } from '@angular/forms';
import { UpdatestudentComponent } from './frontoffice/components/updatestudent/updatestudent.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
