import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../services/product.service';
import { ProductDetails } from '../models/product-detail'
@Component({
  selector: 'app-produc-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() productDetails:ProductDetails;
  tog:boolean=false;
  constructor(private productService:ProductService,
              private router: Router) { 
    
  }

  ngOnInit() {
  
  }
  toggle(product:ProductDetails){
    
    this.router.navigate(['products/productName', product.id]);
  }

}
