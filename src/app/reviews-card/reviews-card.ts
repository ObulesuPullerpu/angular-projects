import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reviews-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './reviews-card.html',
  styleUrl: './reviews-card.scss'
})
export class ReviewsCard {

  reviews = [
    { name: 'Sally D.', time: '20m ago', rating: 5, text: 'It is over qualified and easy to use, thank you.' },
    { name: 'Michael K.', time: '1 day ago', rating: 2, text: 'An improvement is needed asap.' },
    { name: 'Deniz T.', time: '1 day ago', rating: 5, text: 'Works well!!' },
    { name: 'Melissa', time: '3 day ago', rating: 5, text: 'Great service and useful interfaces.' },
  ];
}