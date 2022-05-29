import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../../../services/classe.service';
import { EtudiantService } from '../../../services/etudiants.service';


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
  

  constructor(private studentService:EtudiantService,private classeService:ClasseService) { }

  ngOnInit(): void {
    this.etudiants = this.studentService.getAllStudents();
    this.classes = this.classeService.getAllClasse();
 
  }

  addStudent(){
    const lastId = this.etudiants.length - 1;
    const newId = this.etudiants[lastId].id+ 1;
    
    
    this.etudiants.push({
      nom:this.nomStudent,id:newId,prenom:this.prenomStudent,classe:this.classStudent
    })

  }
  deleteStudent(id:number){
    this.etudiants.splice(this.etudiants.findIndex((student:any)=> student.id === id),1)

  }
  updateStudent(id:number){
    const student = this.etudiants.findIndex((student:any)=> student.id === id)

  }

}
