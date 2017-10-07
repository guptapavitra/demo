import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from "@angular/router";

import { WindowService } from "../services/window.service";

import { HeaderProductsCardComponent } from './header-products-card/header-products-card.component';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {
  @ViewChild('sb') searchBox:ElementRef;
  @ViewChild('pc', {read: ElementRef}) productCardE:ElementRef;
  @ViewChild('pc') productCard:HeaderProductsCardComponent;
  @ViewChild('msm') mobileSideMenu:ElementRef;
  
  constructor(private window:WindowService, private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe((routerEvent) => {
      this.hideProductsCard();
    });
  }

  hideProductsCard() {
    let classes = Array.from(this.productCardE.nativeElement.classList);
    
    if (classes.indexOf('open') > -1) {
      this.productCardE.nativeElement.classList.remove('open');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (!this.hasSomeParentTheClass(event.target, 'search-box')) {
      this.searchBox.nativeElement.classList.remove('expand');      
    }
    if (!this.hasSomeParentTheClass(event.target, 'products-dropdown')) {
      this.productCardE.nativeElement.classList.remove('open');
    }
    if (!this.hasSomeParentTheClass(event.target, 'nm-pull-right') && !this.hasSomeParentTheClass(event.target, 'fa-bars')) {
      this.mobileSideMenu.nativeElement.classList.remove('open');
    }
  }

  toggleSearchBox(event) {
    let classes = Array.from(this.searchBox.nativeElement.classList);

    if (classes.indexOf('expand') > -1) {
      this.searchBox.nativeElement.classList.remove('expand');
    } else {
      this.searchBox.nativeElement.classList.add('expand');
    }
  }

  hasSomeParentTheClass(element, classname) {
    if (element.className.split(' ').indexOf(classname) > -1) return true;
    return element.parentNode && element.parentNode != document && this.hasSomeParentTheClass(element.parentNode, classname);
  }

  onClickOurProductsButton(event) {
    this.toggleProductsCard(event);
    this.productCard.focusOnSearchBox();
  }

  toggleProductsCard(event) {
    let classes = Array.from(this.productCardE.nativeElement.classList);
    
    if (classes.indexOf('open') > -1) {
      this.productCardE.nativeElement.classList.remove('open');
    } else {
      this.productCardE.nativeElement.classList.add('open');
    }
  }

  // Mobile Methods

  mobileOpenMenu(event) {
    var classes = Array.from(this.mobileSideMenu.nativeElement.classList);

    if (classes.indexOf('open') > - 1) {
      this.mobileSideMenu.nativeElement.classList.remove('open');
    } else {
      this.mobileSideMenu.nativeElement.classList.add('open');
    }
  }
}
