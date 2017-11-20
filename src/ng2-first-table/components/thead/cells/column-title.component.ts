import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: 'ng2-st-column-title',
  template: `
    <div class="ng2-smart-title">
      <ng2-first-table-title [source]="source" [column]="column" (sort)="sort.emit($event)" [customizeColumn]="customizeColumn" [grid]="grid"></ng2-first-table-title>
    </div>
  `,
})
export class ColumnTitleComponent {

  @Input() column: Column;
  @Input() source: DataSource;
  @Input() customizeColumn: boolean;
  @Input() grid: any;
  @Output() sort = new EventEmitter<any>();
  
  ngOnInit(){
    // console.info(this.column);
  }
}
