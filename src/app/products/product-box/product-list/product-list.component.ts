import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../models/product-detail';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar'
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
  constructor(private productService:ProductService,
    private slimLoadingBarService: SlimLoadingBarService) { 
      this.startLoading();
    }

  ngOnInit() {

    this.productService.getProduct().subscribe((app)=>{this.productDetails=app})
  }

  startLoading() {
    console.log("helloooo1234")
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
  }
  completeLoading() {
    console.log("helloooo4321")
    this.slimLoadingBarService.complete();
  }

}
