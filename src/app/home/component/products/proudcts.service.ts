import { Injectable } from '@angular/core';
import { ProductListItem } from './product.type';
import { products } from './products.data';

@Injectable({
  providedIn: 'root'
})
export class ProudctsService {
  getProductsList(): ProductListItem[] {
    return products;
  }
}
