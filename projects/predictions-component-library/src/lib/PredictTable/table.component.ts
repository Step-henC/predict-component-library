import { CommonModule, KeyValue, KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableColumn } from './table.model';

@Component({
  selector: 'predict-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})


export class TableComponent {

  @Input() theme: 'sports' | 'blue' = 'sports';
  @Input() columns: TableColumn[] = [{displayName: 'Player Name', selector: "someSelector"}, {displayName: 'Player Stats', selector: "playerStats"}];
  @Input() tableData: any[] = [{someSelector: "not implemented"}]
  @Input() noDataMessage = "No data to display"
  transformedData: any[] = [];

  ngOnInit() {
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
    console.log(this.transformedData)
  }

  public get headerClass(): string {
    return `pred-header-${this.theme}`
  }

  public get rowClass(): string {
    return `pred-row-${this.theme}`
  }

}
