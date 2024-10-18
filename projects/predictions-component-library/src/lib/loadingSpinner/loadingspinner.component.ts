import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'predict-spinner',
  templateUrl: './loadingspinner.component.html',
  styleUrl: './loadingspinner.component.css',
})
export class LoadingSpinnerComponent {

  @Input() theme: 'sports' | 'blue' = 'sports';
  @Input() isLoading = true

  public get classes(): string {
    return `loading-${this.theme}`;
  }

}