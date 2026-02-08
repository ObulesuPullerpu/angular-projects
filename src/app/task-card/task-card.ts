import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-card',
 imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {

  tasks = [
    { title: 'iOS App home page', due: 'Due 23 Aug, 2019', completed: false },
    { title: 'Write a release note for Shreyu', due: 'Due 22 Aug, 2019', completed: false },
    { title: 'Invite Greeva to a project shreyu admin', due: 'Due 21 Aug, 2019', completed: false },
    { title: 'Enable analytics tracking for main website', due: 'Due 20 Aug, 2019', completed: false },
    { title: 'Invite user to a project', due: 'Due 18 Aug, 2019', completed: false },
    { title: 'Write a release note', due: '', completed: false },
  ];
}
