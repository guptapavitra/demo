import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ProductDetails } from '../models/product-detail';
import { ProductService } from '../services/product.service';
import { ProductImpressionsComponent } from '../product-impressions/product-impressions.component'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar'
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  selectedProduct: ProductDetails = null;
  private subscription: Subscription;
  private productIndex: number;
  public myInterval: number = -1;
  public slides: any[] = [];
  public activeSlideIndex: number = 0;
  public noWrapSlides: boolean = false;


  constructor(
    private activateR: ActivatedRoute,
    private productService: ProductService,
    public dialog: MdDialog,
    private slimLoadingBarService: SlimLoadingBarService
  ) {
    document.body.scrollTop = 0;
    this.slides = null;
    this.startLoading()

  }

  ngOnInit() {
    document.body.scrollTop = 0;
    this.selectedProduct = null;
    this.slides = null;
    this.subscription = this.activateR.params.subscribe(
      (params: any) => {
        this.productIndex = params['id'];
        this.getproductbyId(params['id']);
      },
      (error) => { console.log(error) },
      () => { }
    )
    this.getproductbyId(this.productIndex);
  }
  ngOnChanges() {
    this.selectedProduct = null;
    this.slides = null;
    this.subscription = this.activateR.params.subscribe(
      (params: any) => {
        this.getproductbyId(params['id']);
      },
      (error) => { console.log(error) },
      () => { }
    )

  }

  openDialog() {
    let dialogRef = this.dialog.open(ProductImpressionsComponent);
    dialogRef.componentInstance.productName = this.selectedProduct.name;
  }
  getproductbyId(idx: number) {
    this.slides = null;
    this.productService.getProduct().subscribe((app) => {
      app.forEach((element) => {
        if (element.id == idx) {
          this.selectedProduct = element;
          this.slides = element.slides;
          this.completeLoading();
        }
      })
    },
      (error) => {
      },
      () => { })

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
