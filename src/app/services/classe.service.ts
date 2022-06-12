import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class ApiClasseService {
    constructor(private http: HttpClient){}

    getData(){
        return this.http.get('http://127.0.0.1:3000/api/classe');
    }
}