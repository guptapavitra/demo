import { Injectable } from '@angular/core';
import { ProductDetails } from '../models/product-detail';


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
    
    return this.db.list('https://fir-8d8ad.firebaseio.com/productDetails') as FirebaseListObservable<ProductDetails[]>;
 }
  
}
