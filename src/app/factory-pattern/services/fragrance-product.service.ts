import { Injectable } from '@angular/core';
import { ProductPriceCalculation } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FragranceProductService implements ProductPriceCalculation {
  calculateFinalPrice(price: number): number {
    return price > 100 ? price * 0.85 : price; // 15% discount if price > $100
  }
}
