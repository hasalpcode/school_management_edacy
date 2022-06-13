import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn:'root'
})
export class ApiClasseService {
    constructor(private http: HttpClient,private router:Router){}

    getData(){
        return this.http.get('http://127.0.0.1:3000/api/classe');
    }
    deleteClasse(id:any){
        return this.http.delete('http://127.0.0.1:3000/api/classe/'+id);   
    }
    newClasse(donnees:any){
        return this.http.post('http://127.0.0.1:3000/api/classe/',donnees);    
    }

}