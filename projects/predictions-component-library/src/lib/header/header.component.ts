import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'predict-header',
  standalone: true,
  imports: [CommonModule], // needed for ngClass
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  SPORT_ICON = require('../assets/sport-ball.svg');

  ngOnInit() {
    // on page load make sure mobile device or not for offcanvas button to be present
    this.windowResizeAddCanvasButton();
    // then check mobile device presence for offcanvas button on every resize
    window.addEventListener('resize', this.windowResizeAddCanvasButton);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.windowResizeAddCanvasButton);
  }

  @Input() label = 'Add Label';
  @Input() theme: 'sports' | 'blue' = 'sports';
  @Input() isOffcanvasOpen = false;
  @Input() isOffcanvasButtonSeen = false;
  @Input() links = [{ label: 'Google Default', href: 'https://google.com' }];

  public get classes(): string {
    return `principal-header-${this.theme}`;
  }

  public get offcanvasClass(): string {
    return `offcanvas-btn-${this.theme}`;
  }

  public windowResizeAddCanvasButton = () => {
    const navLinksDiv = document.getElementsByClassName('nav-links')[0];
    if (navLinksDiv) {
      //navLinksDisplay.checkVisibility() is a more semantic function
      //but broke unit tests since jsdom does not have that function
      // getComputedStyle may be a bit slower, but it works the same
      const navLinksDisplay = window.getComputedStyle(
        navLinksDiv,
        null
      ).display;
      this.isOffcanvasButtonSeen = navLinksDisplay === 'none';
    }
  };
}
