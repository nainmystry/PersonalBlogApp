import { Directive, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {

  constructor(private router: Router, private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const targetId = this.el.nativeElement.getAttribute('href').substring(1);
    this.router.navigate([], {
      fragment: targetId,
      skipLocationChange: true
    });
  }

}
