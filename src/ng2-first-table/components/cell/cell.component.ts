
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';

@Component({
  selector: 'ng2-first-table-cell',
  template: `
    <ng-container *ngIf="!startUpDblClick">
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell" [customizeColumn]="customizeColumn" [isCellMerge]="isCellMerge"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell" [setColumns]="setColumns"
    [selectLinkageData]="selectLinkageData"
    [inputClass]="inputClass"
    (edited)="onEdited($event)"
    (onChange)="onChange.emit($event)">
  </table-cell-edit-mode>
  </ng-container>
    <ng-container *ngIf="startUpDblClick">
      <table-cell-view-mode *ngIf="!isInEditing && !cell.isDblClick" [cell]="cell" [customizeColumn]="customizeColumn" [isCellMerge]="isCellMerge"></table-cell-view-mode>
      <table-cell-edit-mode *ngIf="isInEditing || cell.isDblClick" [cell]="cell" [setColumns]="setColumns"
      [selectLinkageData]="selectLinkageData"
      [inputClass]="inputClass"
      (edited)="onEdited($event)"
      (onChange)="onChange.emit($event)"
      >
    </table-cell-edit-mode>
  </ng-container>
  `,
})
export class CellComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() editConfirm: EventEmitter<any>;
  @Input() createConfirm: EventEmitter<any>;
  @Input() isNew: boolean;
  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;
  @Input() customizeColumn: boolean;
  @Input() dblEdit: any;
  @Input() startUpDblClick: any;
  @Input() isCellMerge: boolean;

  @Output() edited = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  setColumns: any;
  selectLinkageData: any;
  ngOnInit() {
    this.setColumns = this.grid.dataSet['columns'];
    this.selectLinkageData = this.grid.getSetting('selectLinkageData');
    
  }
  /*
  :
email
:
"Sincere@april.biz"
id
:
1
name
:
"Leanne Graham"
username
:
"Bret111"
  
  
  */

  onEdited(event: any) {
    // console.log(this.row);
    
    // if(this.row.isCellMerge){
    //   let copeRowData = JSON.parse(JSON.stringify(this.row['data']));
    //   let newRowData = {};
    //   for(let k in copeRowData){
    //     newRowData[k] = copeRowData[k].text;
    //   }
    //   this.row['data'] = JSON.parse(JSON.stringify(newRowData));
    // }
    if (this.isNew) {
      this.grid.create(this.grid.getNewRow(), this.createConfirm);
    } else {
      this.grid.save(this.row, this.editConfirm);
    }
  }

}
