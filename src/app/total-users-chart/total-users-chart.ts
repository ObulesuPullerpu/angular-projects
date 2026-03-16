import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import Chart from 'chart.js/auto';


import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexFill,
  ApexGrid,
  ApexMarkers,
  ApexTooltip,
  ApexLegend,
  ApexDataLabels
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  grid: ApexGrid;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-total-users-chart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgApexchartsModule,
    // Chart
  ],
  templateUrl: './total-users-chart.html',
  styleUrl: './total-users-chart.scss'
})
export class TotalUsersChart {

  chartOptions: ChartOptions = {
    series: [
        {
        name: 'Total Users',
        data: [0, 11000, 9500, 10500, 8000, 13000, 16500]
      },
        {
        name: 'Total Products',
        data: [0, 11000, 9500, 10500, 8000, 13000, 16500]
      },
        {
        name: 'Operating Status',
        data: [0, 11000, 9500, 10500, 8000, 13000, 16500]
      },
      {
        name: 'This year',
        data: [10000, 8000, 12000, 18000, 22000, 19500, 21000]
      },
      {
        name: 'Last year',
        data: [0, 11000, 9500, 10500, 8000, 13000, 16500]
      }
    ],

    chart: {
      height: 380,
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'inherit'
    },

    colors: ['#3f51b5', '#9e9e9e'],

    dataLabels: {
      enabled: false
    },

    stroke: {
      curve: 'smooth',   // ✅ now typed correctly
      width: 2
    },

    fill: {
      opacity: [0.3, 0.2]
    },

    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },

    markers: {
      size: 5,
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          colors: '#757575',
          fontSize: '12px'
        }
      }
    },

    yaxis: {
      labels: {
        style: {
          colors: '#757575',
          fontSize: '12px'
        }
      }
    },

    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val: number) => {
          return val.toLocaleString() + ' users';
        }
      }
    },

    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
      labels: {
        colors: '#333'
      }
    }

  };
}
