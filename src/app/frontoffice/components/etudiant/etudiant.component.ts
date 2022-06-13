import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ApiClasseService,  } from '../../../services/classe.service';



@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  etudiants:any =[];
  classes:any =[];
  nomStudent!:string;
  classStudent!:string;
  prenomStudent!:string;
  

  constructor(private classeService:ApiClasseService,private api: ApiService) { }

  ngOnInit(): void {
    this.etudiants = this.getStudents();
    this.classes = this.classeService.getData();
 
  }
  getStudents(){
    this.api.getData().subscribe(res =>{
      console.log(res);
      this.etudiants = res;
    });
    this.classeService.getData().subscribe(classe => {
      this.classes = classe;
    })
  }

  addStudent(myForm:NgForm){
    /*const lastId = this.etudiants.length - 1;
    const newId = this.etudiants[lastId].id+ 1;
    
    
    this.etudiants.push({
      nom:this.nomStudent,id:newId,prenom:this.prenomStudent,classe:this.classStudent
    }) */
    this.api.newStudent(myForm.value).subscribe(res => {
      console.log('ajout reussie',res);
      myForm.reset();
    })
    return history.go();

  }
  deleteStudent(id:number){
    this.etudiants.splice(this.etudiants.findIndex((student:any)=> student.id === id),1)

  }
  updateStudent(id:number){
    const student = this.etudiants.findIndex((student:any)=> student.id === id)

  }



}
