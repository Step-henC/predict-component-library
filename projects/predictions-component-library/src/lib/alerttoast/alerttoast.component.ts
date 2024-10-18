import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'predict-toast',
  templateUrl: './alerttoast.component.html',
  styleUrl: './alerttoast.component.css',
})
export class AlertToastComponent {

  @Input() 
  message = 'Label';

  @Input() 
  status: 'success' | 'error' = 'error';


  @Input()
  timeout = 0;

  alertClass = `alert-success`;

  ngOnInit(){
    this.alertClass = `alert-${this.status}`;

    if (this.timeout > 0){
      setTimeout(() => {
          this.closeAlert()
      }, this.timeout)
    }
  }

  closeAlert(){
    const alertParentDiv = document.getElementsByClassName(this.alertClass)[0] as HTMLElement
    if (alertParentDiv){
      alertParentDiv.style.display = 'none';
    }
  }
  
}