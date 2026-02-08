import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

interface ProductTransaction {
  name: string;
  avatarUrl?: string;    
  date: string;
  amount: string;
  status: any;
  statusColor: string;   
}

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    TableModule,
    ChipModule,
    TagModule,
    CardModule,    
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  statusColor: any;

  transactions: ProductTransaction[] = [
    {
      name: 'ByeWind',
      avatarUrl: 'https://ui-avatars.com/api/?name=ByeWind&background=random',
      date: 'Jun 24, 2022',
      amount: '$942.00',
      status: 'In Progress',
      statusColor: 'primary'
    },
    {
      name: 'Natali Craig',
      avatarUrl: 'https://ui-avatars.com/api/?name=Natali+Craig&background=random',
      date: 'Mar 10, 2022',
      amount: '$881.00',
      status: 'Complete',
      statusColor: 'accent'
    },
    {
      name: 'Drew Cano',
      avatarUrl: 'https://ui-avatars.com/api/?name=Drew+Cano&background=random',
      date: 'Nov 10, 2022',
      amount: '$409.00',
      status: 'Pending',
      statusColor: 'warn'
    },
    {
      name: 'Orlando Diggs',
      avatarUrl: 'https://ui-avatars.com/api/?name=Orlando+Diggs&background=random',
      date: 'Dec 20, 2022',
      amount: '$953.00',
      status: 'Approved',
      statusColor: 'accent'
    },
    {
      name: 'Andi Lane',
      avatarUrl: 'https://ui-avatars.com/api/?name=Andi+Lane&background=random',
      date: 'Jul 25, 2022',
      amount: '$907.00',
      status: 'Rejected',
      statusColor: 'warn'
    }
  ];

  getStatusColor(status: string): string {
  const map: Record<string, string> = {
    'Complete':  'success',
    'Approved':  'success',
    'In Progress': 'primary',
    'Pending':   'warn',
    'Rejected':  'error'
  };
  return map[status] || '';
}

  getStatusClass(status: string): any {
    switch (status) {
      case 'Complete':return 'status-complete';
      case 'Approved': return 'status-approved';
      case 'Pending':  return 'status-pending';
      case 'Rejected': return 'status-rejected'; 
      default: ''  
    }
  }
  private getAvatarUrl(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${this.hslToHex(hue, 70, 50)}&color=fff`;
}

private hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60)   { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
}
// getInitialColor(name: string): string {
//     let hash = 0;
//     for (let i = 0; i < name.length; i++) {
//       hash = name.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     const hue = Math.abs(hash) % 360;
//     return `hsl(${hue}, 70%, 55%)`;
//   }
  // getStatusSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' {
  //   switch (status.toLowerCase()) {
  //     case 'complete':
  //     case 'approved':   return 'success';
  //     case 'in progress': return 'info';
  //     case 'pending':     return 'warning';
  //     case 'rejected':    return 'danger';
  //     default:            return 'secondary';
  //   }
  // }
  getStatusSeverity(status: string): any {
  switch (status.toLowerCase()) {
    case 'complete':
    case 'approved':
      return 'success';
    case 'in progress':
      return 'info';
    case 'pending':
      return 'warn';           // correct spelling
    case 'rejected':
      return 'danger';
    default:
      return 'secondary';
  }
}
  getInitialColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 55%)`;
  }

  getInitials(name: string): string {
    return name.charAt(0).toUpperCase();
  }
}

