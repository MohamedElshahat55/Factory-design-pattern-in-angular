import { Injectable } from '@angular/core';

import { Product } from '../../shared';
import { LaptopProductService } from './laptop-product.service';
import { FragranceProductService } from './fragrance-product.service';
import { SmartphoneProductService } from './smartphone-product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductFactoryService {
  constructor(
    private laptopService: LaptopProductService,
    private fragranceService: FragranceProductService,
    private smartphoneService: SmartphoneProductService
  ) {}

  createProduct(data: Product): any {
    switch (data.category) {
      case 'smartphones':
        data.finalPrice = this.smartphoneService.calculateFinalPrice(data.price);
        return data;
      case 'laptops':
        data.finalPrice = this.laptopService.calculateFinalPrice(data.price);
        return data;
      case 'fragrances':
        data.finalPrice = this.fragranceService.calculateFinalPrice(data.price);
        return data;
      default:
        throw new Error(`Unknown product category: ${data.category}`);
    }
  }
}
