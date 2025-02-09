import { Injectable } from "@angular/core";
import { ProductPriceCalculation } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class SmartphoneProductService implements ProductPriceCalculation {
  calculateFinalPrice(price: number): number {
    return price > 500 ? price * 0.95 : price; // 5% discount if price > $500
  }
}
