import { Component, OnInit } from '@angular/core';
import { Product } from '../../factory-pattern/models/product';
import { ProductService } from '../../factory-pattern/services/product.service';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-old-approach',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './old-approach.component.html',
  styleUrl: './old-approach.component.scss',
})
export class OldApproachComponent implements OnInit {
  products: Product[] = [];
  categories = ['smartphones', 'laptops', 'fragrances'];
  selectedCategory: string = 'smartphones';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts(this.selectedCategory);
  }

  loadProducts(category: string) {
    this.selectedCategory = category;
    this.productService.loadProducts(category).subscribe((products) => {
      this.products = products;
    });
  }

  // Old method: Calculate price based on product type (Without Factory)
  calculateFinalPrice(product: Product): number {
    if (product.category === 'smartphones') {
      return product.price * 1.1; // 10% tax
    } else if (product.category === 'laptops') {
      return product.price > 1000 ? product.price * 0.9 : product.price; // 10% discount if price > $1000
    } else if (product.category === 'fragrances') {
      return product.price * 1.05 + 5; // 5% tax + import fee
    } else {
      return product.price;
    }
  }
}
