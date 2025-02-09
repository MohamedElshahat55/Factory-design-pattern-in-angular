import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ProductFactoryService } from "./product-factory.service";
import { Product } from "../../shared";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "https://dummyjson.com/products/category/";

  constructor(private http: HttpClient, private productFactory: ProductFactoryService) {}

  // Fetch products based on category
  loadProducts(category: string): Observable<Product[]> {
    return this.http
      .get<{ products: any[] }>(`${this.apiUrl}${category}`)
      .pipe(map((response) => response.products.map((productData) => this.productFactory.createProduct(productData))));
  }
}
