import { Component, Input } from '@angular/core';
import { TableColumn } from './table.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'predict-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})


export class TableComponent {

  @Input() theme: 'sports' | 'blue' = 'sports';
  @Input() columns: TableColumn[] = [];
  @Input() tableData: any[] = []
  @Input() noDataMessage = "No data to display"
  transformedData: any[] = [];


   ngOnChanges() {
    this.transformedData = this.tableData.map((item) => {
      // transformed data maps tableData keys in order of tableColumns selector value
      // so that data matches with table headers always regardless of consumers data entry
      // achieve key order with an array of key val pairs
          let dataSortedByColumns  = []        
          for (let obj of this.columns){
            let kv = {key: obj.selector, value: item[obj.selector] }
            dataSortedByColumns.push(kv)
          }
      return dataSortedByColumns;
    })
  }

  public get headerClass(): string {
    return `pred-header-${this.theme}`
  }

  public get rowClass(): string {
    return `pred-row-${this.theme}`
  }

}
