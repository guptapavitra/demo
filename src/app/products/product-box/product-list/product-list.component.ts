import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../models/product-detail';

@Component({
  selector: 'app-product-list',
  template: `
  <div class="row">
  <div class="col-xs-12">
    <ul class="list-group">
      <app-produc-box *ngFor="let productDetails of productDetails" [productDetails]="productDetails" ></app-produc-box>
    </ul>
  </div>
</div>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  productDetails:ProductDetails[];
  constructor(private productService:ProductService) { }

  ngOnInit() {

    this.productService.getProduct().subscribe((app)=>{this.productDetails=app})
  }

}
