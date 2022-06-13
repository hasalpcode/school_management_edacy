import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClasseService,  } from '../../../services/classe.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  classes:any =[]
  nomClasse!:string;
  constructor(private classeService:ApiClasseService,private router:Router,private _location: Location) { }
  
  ngOnInit(): void {
    this.getAllClasses();
  }
  @Output() classeToAdd: EventEmitter<any> = new EventEmitter();
  getAllClasses(){
    this.classeService.getData().subscribe(res => {
      this.classes = res;
    })
  }
  addClasse(myForm:NgForm){
     /* const lastId = this.classes.length - 1;
    const newId = this.classes[lastId].id+ 1;
    
    
    this.classes.push({
      nom:this.nomClasse,id:newId
    }) */
   this.classeService.newClasse(myForm.value).subscribe(res => {
     console.log('ajout reussie',res);
     myForm.reset();
   })
   return history.go();

  }
  

  deleteClasse(id:string){
    //this.classes.splice(this.classes.findIndex((classe:any)=> classe.id === id),1);

    this.classeService.deleteClasse(id).subscribe(res => {
      console.log('reussi')
    });

    return history.go();

  }

}


