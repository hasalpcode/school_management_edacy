import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class ApiService {
    constructor(private http: HttpClient){}

    getData(){
        return this.http.get('http://127.0.0.1:3000/api/student');
    }
    deleteStudent(id:any){
        return this.http.delete('http://127.0.0.1:3000/api/student/'+id);   
    }
    newStudent(donnees:any){
        return this.http.post('http://127.0.0.1:3000/api/student/',donnees);    
    }
    updateStudent(donnees:any,id:any){
        return this.http.put('http://127.0.0.1:3000/api/student/'+id,donnees);    
    }
    getOneStudent(id:String){
        return this.http.get('http://127.0.0.1:3000/api/student/'+id); 
    }
}