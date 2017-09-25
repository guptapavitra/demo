import { Injectable } from '@angular/core';
import { ProductDetails } from '../product/models/product-detail';

import {PRODUCTDETAILS} from './json/productDetails'
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, } from 'angularfire2/database';
@Injectable()
export class ProductService {
  productDetails:FirebaseListObservable<ProductDetails[]>;
  constructor(private db: AngularFireDatabase) { }
  getProductById(id:number) {
     this.productDetails
    
  }
  getProduct() {
    this.productDetails=this.db.list('https://fir-8d8ad.firebaseio.com/productDetaiss') as FirebaseListObservable<ProductDetails[]>
    return this.productDetails;
 }
  
}
