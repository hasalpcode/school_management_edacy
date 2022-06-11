import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api_node.service';



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
  

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {

    
    this.getStudent();
 
  }

  getStudent(){
    this.ApiService.getDataStudent().subscribe((res) => {
      this.etudiants = res;
    },(error) => {
      console.log('ERRor is ',error)
    })
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
