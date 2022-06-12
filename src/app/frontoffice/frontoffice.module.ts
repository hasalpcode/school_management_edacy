import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontofficeComponent } from './frontoffice.component';
import { ClasseComponent } from './components/classe/classe.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { HomeComponent } from './components/home/home.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FrontofficeComponent,EtudiantComponent,HomeComponent,UpdatestudentComponent,ClasseComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    SharedModule,
    
  ]
})
export class FrontofficeModule { }
