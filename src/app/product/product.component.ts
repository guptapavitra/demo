import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './models/product-detail'
import { ProductService } from './product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productDetails:ProductDetails[];
  
  constructor(private productService:ProductService) { 
    
  }

  ngOnInit() {
    this.productService.getProduct().subscribe((app)=>{console.log("helloooo",app)})
  }

}
