import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: '[ng2-st-thead-form-row]',
  template: `
      <td *ngIf='isTdShow'></td>
      <td *ngIf="isMultiSelectVisible"></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngIf="actions2IsShow && actions2Left"></td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-first-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-first-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngIf="actions2IsShow && actions2Right"></td>
  `,
})
export class TheadFormRowComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() createConfirm: EventEmitter<any>;

  @Output() create = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;
  addInputClass: string;

  // 新增 Action2 列
  actions2IsShow: boolean;
  actions2Left: boolean;
  actions2Right: boolean;

  isTdShow: boolean;
  onCreate(event: any) {
    event.stopPropagation();

    this.grid.create(this.grid.getNewRow(), this.createConfirm);
  }

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.addInputClass = this.grid.getSetting('add.inputClass');
    if (this.grid.getSetting('selectMode') === 'multi') {
      this.isTdShow = true;
    }

    // 新增 actions2 列
    this.actions2IsShow = this.grid.getSetting('actions2').isShow;
    this.actions2Left = this.grid.getSetting('actions2').position === 'left';
    this.actions2Right = this.grid.getSetting('actions2').position === 'right';
  }
}
