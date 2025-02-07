import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { SmartphoneProduct } from '../models/smartphone-product';
import { LaptopProduct } from '../models/laptop-product';
import { FragranceProduct } from '../models/fragrance-product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductFactoryService {
  createProduct(data: any): Product {
    switch (data.category) {
      case 'smartphones':
        return new SmartphoneProduct(
          data.id,
          data.title,
          data.price,
          data.category
        );
      case 'laptops':
        return new LaptopProduct(
          data.id,
          data.title,
          data.price,
          data.category
        );
      case 'fragrances':
        return new FragranceProduct(
          data.id,
          data.title,
          data.price,
          data.category
        );
      default:
        throw new Error('Unknown product category');
    }
  }
}
