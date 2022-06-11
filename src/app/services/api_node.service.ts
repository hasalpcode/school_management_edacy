import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class ApiService {
    constructor(private http: HttpClient){}

    getDataStudent(){
        return this.http.get('http://localhost:3000/api/student');
    };
    getDataClasse() {
        return this.http.get('http://localhost:3000/api/classe') ;
    };
}