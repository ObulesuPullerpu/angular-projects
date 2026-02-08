import { Component, OnInit, signal, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { Observable, of,from } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { ElementRef } from '@angular/core';
import { map } from 'rxjs';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NewApp } from './new-app/new-app';
import { ShowTask } from './show-task/show-task';
import { GlobalService } from './global-service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Dashboard } from './dashboard/dashboard';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { provideCharts } from 'ng2-charts';
@Component({
  selector: 'app-root',
   standalone: true, 
   
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    ButtonModule,
    RouterModule,
    // NewApp,
    // ShowTask,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTableModule,
    Dashboard,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  implements OnInit{
  // protected readonly title = signal('angular-app');
  title = 'ByeWind Dashboard';
  value:any;
formGroup:any;
   @ViewChildren('createbutton')
  createbutton :ElementRef;
  normalList:any;
  items: any[] = [];
  items1:any[]=[];
   newObserverList: any;
  recentExpanded:boolean=false;
  showOverlay = false;

  constructor(
public globalService:GlobalService
  ){
      this.items = [
    'Apple',
    'Orange',
    'Banana',
    'Grapes'
  ]
  }
  ngOnInit(): void {

    this.normalMrethod();
  }

displayedColumns = ['info', 'date', 'amount', 'status'];

dataSource = [
  {
    name: 'ByeWind',
    avatar: 'https://i.pravatar.cc/40?img=1',
    date: 'Jun 24, 2022',
    amount: '$942.00',
    status: 'In Progress',
    statusClass: 'progress'
  },
  {
    name: 'Natali Craig',
    avatar: 'https://i.pravatar.cc/40?img=2',
    date: 'Mar 10, 2022',
    amount: '$881.00',
    status: 'Complete',
    statusClass: 'complete'
  },
  {
    name: 'Drew Cano',
    avatar: 'https://i.pravatar.cc/40?img=3',
    date: 'Nov 10, 2022',
    amount: '$409.00',
    status: 'Pending',
    statusClass: 'pending'
  },
  {
    name: 'Orlando Diggs',
    avatar: 'https://i.pravatar.cc/40?img=4',
    date: 'Dec 20, 2022',
    amount: '$953.00',
    status: 'Approved',
    statusClass: 'approved'
  },
  {
    name: 'Andi Lane',
    avatar: 'https://i.pravatar.cc/40?img=5',
    date: 'Jul 25, 2022',
    amount: '$907.00',
    status: 'Rejected',
    statusClass: 'rejected'
  }
];

   myObservable  =new Observable((observer)=>{
     setTimeout(()=>{ observer.next(1)},1000)
    setTimeout(()=>{observer.next(2) },2000)
    setTimeout(()=>{ observer.next(3) },3000)
    setTimeout(()=>{ observer.error('Error Occured .Try again Later') },4000)
    setTimeout(()=>{ observer.next('hello') },5000)
    setTimeout(()=>{observer.complete()},1000)
  
   });
   normalMrethod(){
    this.myObservable=from(['23,45,78'])
    this.myObservable.subscribe((val)=>{
      this.normalList = val;
    })

   }
favouriteExpanded = false;

selectedContact: string | null = 'Andi Lane'; 

selectContact(name: string) {
  this.recentExpanded = true; 
  this.selectedContact = name;
}

}
    
 




