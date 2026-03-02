import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-spendings-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './spendings-card.html',
  styleUrl: './spendings-card.scss'
})
export class SpendingsCard {


  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 12, padding: 16 }
      },
      tooltip: { enabled: true }
    },
  };

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['SERVER', 'HOSTING', 'SERVICES', 'OTHERS'],
    datasets: [{
      data: [20, 40, 15, 15],
      backgroundColor: ['#2196f3', '#4caf50', '#ff9800', '#9e9e9e'],
      hoverBackgroundColor: ['#1976d2', '#388e3c', '#f57c00', '#757575'],
      borderWidth: 0,
    }]
  };

  public doughnutChartType: ChartType = 'doughnut';
}