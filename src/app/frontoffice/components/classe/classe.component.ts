import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../../../services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  classes:any =[]
  nomClasse!:string;
  constructor(private classeService:ClasseService) { }

  ngOnInit(): void {
    this.classes = this.classeService.getAllClasse();
  }
  addClasse(){
    const lastId = this.classes.length - 1;
    const newId = this.classes[lastId].id+ 1;
    
    
    this.classes.push({
      nom:this.nomClasse,id:newId
    })

  }
  deleteClasse(id:number){
    this.classes.splice(this.classes.findIndex((classe:any)=> classe.id === id),1)

  }

}
