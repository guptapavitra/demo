import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { WindowService } from "../services/window.service";

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {
  @ViewChild('sb') searchBox:ElementRef; 

  constructor(private window:WindowService) { }

  ngOnInit() {
    
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (!this.hasSomeParentTheClass(event.target, 'search-box')) 
    this.searchBox.nativeElement.classList.remove('expand');
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

}
