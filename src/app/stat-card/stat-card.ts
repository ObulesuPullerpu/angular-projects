import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-stat-card',
  imports: [
CommonModule, MatCardModule, MatIconModule,MatChipsModule

  ],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  icon = input.required<string>();
  value = input.required<string>();
  label = input.required<string>();
  change = input.required<string>();
  trend = input<'up' | 'down'>('up');
  color = input<string>('#3f51b5');

}
