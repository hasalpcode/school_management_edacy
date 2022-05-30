import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports:[
    HeaderComponent,FooterComponent,FormsModule,RouterModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
