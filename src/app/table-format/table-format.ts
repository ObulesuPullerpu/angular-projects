import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-format',
  imports: [
    CommonModule
  ],
  templateUrl: './table-format.html',
  styleUrl: './table-format.scss',
})
export class TableFormat implements OnInit {
  users: User[]=[];
  constructor(
    public user:User
  ){

  }


ngOnInit(): void {
  
  }
 

}


