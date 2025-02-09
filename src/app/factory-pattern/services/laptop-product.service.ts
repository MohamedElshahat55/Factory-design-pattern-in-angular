import { Injectable } from '@angular/core';
import { ProductPriceCalculation } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class LaptopProductService implements ProductPriceCalculation {
  calculateFinalPrice(price: number): number {
    return price > 1000 ? price * 0.9 : price; // 10% discount if price > $1000
  }
}
