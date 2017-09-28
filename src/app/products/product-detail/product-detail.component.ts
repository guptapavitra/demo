import { Component, OnInit } from '@angular/core';
import  { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ProductDetails } from '../models/product-detail';
import { ProductService } from '../services/product.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  selectedProduct:Observable<ProductDetails>;
  private subscription :Subscription;
  private productIndex : number;
  constructor(
    private activateR:ActivatedRoute,
    private productService:ProductService
  ) {
    
  }

  ngOnInit() {
    this.subscription=this.activateR.params.subscribe(
      (params:any)=>{
        this.productIndex=params['id'];
        // console.log(this.productService.getProduct(this.productIndex));
      }
    )

    // conssole.log("hahaha",this.productService.getProduct(this.productIndex).subscribe(app=>console.log("2344",app)));
  }
  public myInterval: number = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
}
