import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent {

  @ViewChild('base', { static: false}) baseRef: ElementRef;

  displayText =   "Hello, this is a sample span element";

  constructor() { 
  }

  ngAfterViewInit(){
    console.log(this.baseRef.nativeElement.offsetHeight);
    console.log(this.baseRef.nativeElement.offsetWidth);
    console.log(this.baseRef.nativeElement.scrollWidth);
  }

}