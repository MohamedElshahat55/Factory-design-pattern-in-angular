import { Product } from './product';

export class FragranceProduct implements Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public category: string
  ) {}

  calculateFinalPrice(): number {
    return this.price * 1.05 + 5; // 5% tax + $5 import fee
  }
}
