import { Injectable } from "@angular/core";
import { EtudiantComponent } from "../frontoffice/components/etudiant/etudiant.component";

@Injectable({
    providedIn:'root'
})
export class EtudiantService {
    etudiants=[
        {nom:"diallo",prenom:"hasalp",id:1,classe:"Terminal S2"},
        {nom:"diop",prenom:"alhassane",id:2,classe:"Terminal L2b"},
        {nom:"mendy",prenom:"jean",id:3,classe:"Terminal S1"},
    ];
    getAllStudents(){
        return this.etudiants
    }
    getOneStudent(id:number){
        return this.etudiants[id];
    }
}