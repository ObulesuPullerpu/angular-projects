import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StatCard } from '../stat-card/stat-card';
import { ReviewsCard } from '../reviews-card/reviews-card';
import { SpendingsCard } from '../spendings-card/spendings-card';
import { ConversationCard } from '../conversation-card/conversation-card';
import { TaskCard } from '../task-card/task-card';
import { BookSelled } from '../book-selled/book-selled';
import { ProductList } from '../product-list/product-list';
import { TotalUsersChart } from '../total-users-chart/total-users-chart';


@Component({
  selector: 'app-dashboard',
  imports: [
CommonModule,
    MatCardModule,
    MatIconModule,
    StatCard,
     ReviewsCard,
  SpendingsCard,
  ConversationCard,
  TaskCard,
  BookSelled,
  ProductList,
  TotalUsersChart
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
