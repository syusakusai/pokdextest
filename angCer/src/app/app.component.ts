import { Component, } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angCer';
  ScrollTF;
  divStyle;
  trans;
  opcai;
  scroll;
  ok;
  fixed = false;
  opak = true;
  // oketop;
  @HostListener("window:scroll", ['$event'])
  onDocumentRemoteEvent(ev: any) {
    // handle the event here
    this.handleScroll()
}


    ngAfterViewInit() {
const el = document.getElementById('banner');

  // this.divStyle = '200'; 
  this.trans = 'all 1s ease-out';
  this.opcai = '0.9';
  var oketop = el.offsetTop;
  this.ok = oketop
  this.scroll = window.scrollY;
  // console.log('ini > ',oketop > this.scroll)

  // window.addEventListener('scroll', this.handleScroll());

}

	handleScroll() {
		// console.log('test')
        if(window.pageYOffset > 450 && window.pageYOffset < 1500) {
        	this.scroll = window.scrollX;
        	this.fixed = true;


        // this.setState({ scroll: window.scrollX, fixed: true});
        } else {
        	this.scroll = window.scrollY;
            // this.setState({ scroll: window.scrollY});
        }
	}


  	  onWindowScroll() {
  	  	console.log('ini')

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 500) {
    	this.ScrollTF = true;
      console.log('You are 500px from the top to bottom');
    } else if (number > 1000) {
        console.log('You are 1000px from the top to bottom');
    }

  }

  	handleClick(e) {
        this.opak = false;

        let shand = document.getElementById('banner');

        if (this.opak === false) {
        	shand.style.opacity = "0";
        	// document.getElementById("banner").style.opacity = "0";

        }
            // console.log('test', shand.length > 1 || !this.opak);
            console.log('shand',shand)

            console.log('opak',this.opak)
        this.opcai = 0;
		// this.setState((prev) => ({ opacity: 0 }));
	}

}
