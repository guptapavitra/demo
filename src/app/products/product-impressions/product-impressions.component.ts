import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-product-impressions',
  templateUrl: './product-impressions.component.html',
  styleUrls: ['./product-impressions.component.css']
})
export class ProductImpressionsComponent implements OnInit {
  @Input() productName: string
  subject: string = "enquiry about the product";
  matter: string = "Hi all i would like to enquire about the product";
  to: string = "abc@saaskin.com"
  constructor(public dialogRef: MdDialogRef<ProductImpressionsComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
  
    this.dialogRef.close();
  }

}
