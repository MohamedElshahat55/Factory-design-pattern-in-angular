import { Product } from './product';

export class SmartphoneProduct implements Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public category: string
  ) {}

  calculateFinalPrice(): number {
    return this.price * 1.1; // 10% tax
  }
}
