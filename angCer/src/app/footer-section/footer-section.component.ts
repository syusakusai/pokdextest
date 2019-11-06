import { Component, OnInit } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent implements OnInit {
divStyle;
tratransition;
kadal = ''
  constructor() { }

  ngOnInit() {
 	

  }

  ngAfterViewInit() {
  this.divStyle = 'all 1s ease-out'; 
  window.addEventListener('scroll', this.handleScroll);

}

	





}
