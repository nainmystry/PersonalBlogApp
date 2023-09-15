import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  isHeaderVisible = true;
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth <= 768;
  }
  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and toggle the CSS class accordingly
    this.isHeaderVisible = window.scrollY <= 1;
  }
  
  
}
