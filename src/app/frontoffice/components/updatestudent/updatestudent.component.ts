import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EtudiantComponent } from '../etudiant/etudiant.component';


@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent implements OnInit {
  studentId:any;
  
  etudiant:any =[];
  constructor(private route:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.studentId = params.get('id');
      
    });
   
  }

  


}
