import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'predict-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  @Input() label = 'Add Label';
  @Input() theme: 'sports' | 'blue' = 'sports';
  @Input() isOffcanvasOpen = false;
  @Input() links = [{ label: 'Google Default', href: 'https://google.com' }];

  public get classes(): string {
    return `principal-header-${this.theme}`;
  }

  public get offcanvasClass(): string {
    return `offcanvas-btn-${this.theme}`;
  }
}
