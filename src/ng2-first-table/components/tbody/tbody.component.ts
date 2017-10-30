import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Grid } from '../../lib/grid';
import { Row } from '../../lib/data-set/row';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from "../../lib/data-set/column";

@Component({
  selector: '[ng2-st-tbody]',
  styleUrls: ['./tbody.component.scss'],
  templateUrl: './tbody.component.html',
})
export class Ng2SmartTableTbodyComponent {

  @Input() grid: Grid;
  @Input() source: DataSource;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;
  @Input() rowClassFunction: Function;
  @Input() rowBgc: object;
  @Input() clickBgc: object;
  @Input() trToolSubtotalIsShow: boolean;
  @Input() trToolTotalIsShow: boolean;
  @Input() trtoolSubtotalArr: any;
  @Input() trSubtotalData: any;
  @Input() trToolTotalData: any;
  @Input() huizong: any;
  @Input() setTrHeight: any;
  @Input() allowToInsertData: any;
  @Input() customizeColumn: any;
  @Input() isEditCell: boolean;


  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() userSelectRow = new EventEmitter<any>();
  @Output() dbSelect = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();
  @Output() multipleSelectRow = new EventEmitter<any>();
  @Output() onmousedown = new EventEmitter<any>();
  @Output() onmouseup = new EventEmitter<any>();
  @Output() onkeydown = new EventEmitter<any>();

  // @Output() rowHover = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;
  mode: string;
  editInputClass: string;
  isActionAdd: boolean;
  isActionEdit: boolean;
  isActionDelete: boolean;
  noDataMessage: boolean;

  // 小计需要的数据
  subtotalData: any;
  newObj: any;

  // 双击编辑数据
  dblClickEdit: any;
  startUpDblClick: boolean = false;
  
 
  ngOnChanges() {
    this.dblClickEdit = this.grid.getSetting('dblClickEdit');
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.mode = this.grid.getSetting('mode');
    this.editInputClass = this.grid.getSetting('edit.inputClass');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.isActionAdd = this.grid.getSetting('actions.add');
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.noDataMessage = this.grid.getSetting('noDataMessage');
    this.subtotalData = this.huizong(this.trtoolSubtotalArr.concat([]), this.trSubtotalData);
  }


  tdDblClickFn(event: any) {
  
    if (this.isEditCell || this.dblClickEdit) {
      this.startUpDblClick = true;
      event.isDblClick = true;
    }
  }
}
