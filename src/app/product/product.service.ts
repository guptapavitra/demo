import { Injectable } from '@angular/core';
import { ProductDetails } from '../product/models/product-detail';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  productDetails:ProductDetails;
  constructor(private http:Http) { }
  getProduct(id:number) : Observable<ProductDetails[]>{
     
    return this.http.get('./json/productDetails.json').map(res =>this.productDetails=res.json());
  }
  
}
