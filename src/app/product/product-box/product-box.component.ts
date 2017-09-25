import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetails } from '../models/product-detail'
@Component({
  selector: 'app-produc-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() productDetails:ProductDetails;
  
  constructor(private productService:ProductService) { 
    
  }

  ngOnInit() {
    console.log("hello",this.productDetails)
  }


}
