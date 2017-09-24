import { Component, OnInit,OnDestroy } from '@angular/core';
import  { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
//models
import { ProductDetails } from '../models/product-detail'
//services
import { ProductService } from '../product.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct:Observable<ProductDetails>;
  private subscription :Subscription;
  private productIndex : number;


  constructor(
    private activateR:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    // this.subscription=this.activateR.params.subscribe(
    //   (params:any)=>{
    //     this.productIndex=params['id'];
    //     console.log(this.productService.getProduct(this.productIndex));
    //   }
    // )

    console.log("hahaha",this.productService.getProduct(this.productIndex).subscribe(app=>console.log("2344",app)));
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
