import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './components/classe/classe.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { FrontofficeComponent } from './frontoffice.component';



const routes: Routes = [
    {
        path:"",component:FrontofficeComponent,
        children:[
            {
                path:'home',component:HomeComponent
            },
            {
                path:'students',component:EtudiantComponent
            },
            {
                path:'classroom',component:ClasseComponent
            },
           
            { path: 'etudiant', component: UpdatestudentComponent },
            {
                path:"",redirectTo:"home",pathMatch:"full"
            }
        ]
    }

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }