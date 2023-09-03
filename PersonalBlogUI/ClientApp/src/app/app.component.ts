import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  dynamicImageUrl = '';

  isMobile: boolean = false;
  isTab: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth <= 768;
    this.isTab = window.innerWidth <= 1200 && window.innerWidth >= 768;
  }
  ngOnInit() {
  }
  
  
}
