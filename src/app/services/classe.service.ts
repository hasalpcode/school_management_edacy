import { Injectable } from "@angular/core";
import { EtudiantComponent } from "../frontoffice/components/etudiant/etudiant.component";

@Injectable({
    providedIn:'root'
})
export class ClasseService {
    classes=[
        {nom:"Terminal S1",id:1},
        {nom:"Terminal S2",id:2},
        {nom:"Terminal L1a",id:3},
        {nom:"Terminal L2b",id:4},
       
    ];
    getAllClasse(){
        return this.classes
    }
}