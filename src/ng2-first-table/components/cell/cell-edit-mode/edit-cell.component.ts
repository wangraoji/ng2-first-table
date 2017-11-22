import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-edit-mode',
  template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [cellMerge]="cellMerge"
                                  [setColumns]="setColumns"
                                  [inputClass]="inputClass"
                                  [selectLinkageData]="selectLinkageData"
                                  (edited)="onEdited($event)"
                                  (onChange)="onChange.emit($event)"
                                  >
        </table-cell-default-editor>
      </div>
    `,
})
export class EditCellComponent {
  @Input() setColumns: any;
  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() selectLinkageData: any;

  @Output() edited = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();      
  
  // 单元行合并
  cellMerge: boolean;
  ngOnInit(){
    this.cellMerge = this.cell['row'].isCellMerge;
    
  }

  // ngOnChanges(){
  //   // this.isCellMerge = this.startUpDblClick;
  //   // console.info(this.isCellMerge);
  // }

// onChange(e:any){
//   console.log(e);
  
// }


  onEdited(event: any): boolean {
    this.edited.next(event);
    return false;
  }
  
  getEditorType(): string {
    return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
  }
}
