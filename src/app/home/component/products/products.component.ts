import { Component } from '@angular/core';
import { ProductListItem } from './product.type';
import { ProudctsService } from './proudcts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProudctsService],

})
export class ProductsComponent {
  products: ProductListItem[] = [];
  constructor(productsService: ProudctsService){
    this.products = productsService.getProductsList();


  }

}
