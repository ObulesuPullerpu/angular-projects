import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Product {
  // name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  imageUrl: string;      // placeholder or real URL
  isOnSale: boolean;
}
@Component({
  selector: 'app-book-selled',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './book-selled.html',
  styleUrl: './book-selled.scss',
})
export class BookSelled {
  products: Product[] = [
    {
   
      description: 'Combo Pack of 2 Sports Shoes Running Shoes',
      originalPrice: 280,
      salePrice: 140,
      rating: 3.5,
      imageUrl: 'https://via.placeholder.com/300x400/cccccc/000000?text=Shoes+1',
      isOnSale: true
    },
    {
      // name: 'Combo Pack of 2 Sports Shoes Running Shoes',
      description: 'Combo Pack of 2 Sports Shoes Running Shoes',
      originalPrice: 320,
      salePrice: 280,
      rating: 4,
      imageUrl: 'https://via.placeholder.com/300x400/cccccc/000000?text=Shoes+2',
      isOnSale: false
    },
    {
      // name: 'Combo Pack of 2 Sports Shoes Running Shoes',
      description: 'Combo Pack of 2 Sports Shoes Running Shoes',
      originalPrice: 320,
      salePrice: 280,
      rating: 4,
      imageUrl: 'https://via.placeholder.com/300x400/cccccc/000000?text=Shoes+3',
      isOnSale: false
    },
    // Add more products if needed
  ];

  scrollLeft(scrollContainer: HTMLElement) {
    scrollContainer.scrollBy({ left: -280, behavior: 'smooth' });
  }

  scrollRight(scrollContainer: HTMLElement) {
    scrollContainer.scrollBy({ left: 280, behavior: 'smooth' });
  }

  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : (i < rating ? 0.5 : 0));
  }

}
