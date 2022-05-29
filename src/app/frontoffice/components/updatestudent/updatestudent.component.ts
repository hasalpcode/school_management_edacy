import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { EtudiantService } from '../../../services/etudiants.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent implements OnInit {
  studentId:any;
  
  etudiants:any =[];
  constructor(private route:ActivatedRoute,private studentService:EtudiantService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.studentId = params.get('id');
      this.etudiants = this.studentService.getAllStudents();
    })
  }
  

}
