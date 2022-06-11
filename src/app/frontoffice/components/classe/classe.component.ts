import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api_node.service';


@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  classes:any =[]
  nomClasse!:string;
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
   
    this.getAllClasse();
  }

  getAllClasse(){
    this.ApiService.getDataClasse().subscribe((res) => {
      this.classes = res;
    },(error) => {
      console.log('ERRor is ',error)
    })
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
