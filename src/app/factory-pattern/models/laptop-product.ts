import { Product } from './product';

export class LaptopProduct implements Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public category: string
  ) {}

  calculateFinalPrice(): number {
    return this.price > 1000 ? this.price * 0.9 : this.price; // 10% discount if price > $1000
  }
}
