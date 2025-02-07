import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  #producService = inject(ProductService);

  products: Product[] = [];
  categories = ['smartphones', 'laptops', 'fragrances'];

  ngOnInit(): void {
    this.loadProducts('smartphones');
  }

  loadProducts(category: string) {
    this.#producService.loadProducts(category).subscribe((products) => {
      this.products = products;
    });
  }
}
