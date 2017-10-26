import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';

@Component({
  selector: 'ng2-first-table-cell',
  template: `
    <ng-container *ngIf="!startUpDblClick">
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell" [customizeColumn]="customizeColumn"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
    [inputClass]="inputClass"
    (edited)="onEdited($event)">
  </table-cell-edit-mode>
  </ng-container>
    <ng-container *ngIf="startUpDblClick">
      <table-cell-view-mode *ngIf="!isInEditing && !cell.isDblClick" [cell]="cell" [customizeColumn]="customizeColumn"></table-cell-view-mode>
      <table-cell-edit-mode *ngIf="isInEditing || cell.isDblClick" [cell]="cell"
      [inputClass]="inputClass"
      (edited)="onEdited($event)">
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

  @Output() edited = new EventEmitter<any>();
 
  // ngOnChanges(){
  //   console.info(this.startUpDblClick);
  // }
  onEdited(event: any) {
    if (this.isNew) {
      this.grid.create(this.grid.getNewRow(), this.createConfirm);
    } else {
      this.grid.save(this.row, this.editConfirm);
    }
  }
}
