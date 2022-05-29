import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../../../services/classe.service';
import { EtudiantService } from '../../../services/etudiants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title="School Management"
  etudiants:any = [];
  classes:any = [];
  constructor(private studentService:EtudiantService,private classeService:ClasseService) {}

  ngOnInit(): void {
  }

}
