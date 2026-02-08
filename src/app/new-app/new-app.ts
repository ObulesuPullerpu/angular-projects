import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-new-app',
   standalone: true, 
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './new-app.html',
  styleUrl: './new-app.scss',
})
export class NewApp {
  formGroup:any;
  SendData(){
    alert('Method Clicked');
    console.log('Data is '+ this.formGroup)
  }

}
