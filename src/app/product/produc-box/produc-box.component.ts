import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetails } from '../models/product-detail'
@Component({
  selector: 'app-produc-box',
  templateUrl: './produc-box.component.html',
  styleUrls: ['./produc-box.component.css']
})
export class ProducBoxComponent implements OnInit {
  @Input() productDetails:ProductDetails;
  
  constructor(private productService:ProductService) { 
    
  }

  ngOnInit() {
    this.productService.getProduct().subscribe((app)=>{console.log("helloooo",app)});
    this.productDetails.description
  }


}
