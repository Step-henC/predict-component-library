import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'predict-button',
  templateUrl: './predictbutton.component.html',
  styleUrl: './predictbutton.component.css',
})
export class PredictButtonComponent {

  @Input() 
  label = 'Label';

  @Input() 
  theme: 'sports' | 'blue' = 'sports';

  @Input() 
  disabled = false

  @Output() 
  handleClick = new EventEmitter<any>();

  public get classes(): string {
    return this.disabled ? 'btn-disabled' : `btn-${this.theme}`;
  }

}