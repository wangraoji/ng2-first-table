import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  // 发射tree
  @Output() treeEvent = new EventEmitter<any>();
  
  // 发射action2事件
  @Output() actions2Event = new EventEmitter<any>();

  // @Output() rowHover = new EventEmitter<any>();






  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;
  mode: string;
  selectMode: number;
  editInputClass: string;
  isActionAdd: boolean;
  isActionEdit: boolean;
  isActionDelete: boolean;
  noDataMessage: boolean;

  // 新增 Action2 列
  actions2IsShow: boolean;
  actions2Left: boolean;
  actions2Right: boolean;
  actions2columnCont: any;

  // 小计需要的数据
  subtotalData: any;
  newObj: any;

  // 双击编辑数据
  dblClickEdit: any;
  startUpDblClick: boolean = false;

  // tree数据
  isZhanKai: boolean;

  // 点击显示图标
  isClickIcon: boolean;

  // 列合并
  isCellMerge: boolean;

  // hover颜色
  hoverBgc: any;

  hasBgc: boolean;
  hasClickBgc: boolean;


  constructor(private domSanitizer: DomSanitizer) { }

  ngOnChanges() {

    
    this.hoverBgc = this.grid.getSetting('hoverBgc');
    this.isClickIcon = this.grid.getSetting('isClickIcon');
    this.isCellMerge = this.grid.getSetting('isCellMerge');
    this.dblClickEdit = this.grid.getSetting('dblClickEdit');
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.mode = this.grid.getSetting('mode');
    this.selectMode = this.grid.getSetting('selectMode') ? 1 : 0;
    this.editInputClass = this.grid.getSetting('edit.inputClass');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.isActionAdd = this.grid.getSetting('actions.add');
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.noDataMessage = this.grid.getSetting('noDataMessage');
    this.hasBgc = this.grid.getSetting('rowBgc.isShow');
    this.hasClickBgc = this.grid.getSetting('clickBgc.isShow');
    this.subtotalData = this.huizong(this.trtoolSubtotalArr.concat([]), this.trSubtotalData);
    // 新增 actions2 列
    this.actions2IsShow = this.grid.getSetting('actions2').isShow;
    this.actions2Left = this.grid.getSetting('actions2').position === 'left';
    this.actions2Right = this.grid.getSetting('actions2').position === 'right';
    this.actions2columnCont = this.grid.getSetting('actions2').columnCont;
  }
  // action2事件
  actions2Fn(event: any, row: any) {
    event.stopPropagation();
    this.actions2Event.emit(row)
  }
  tdDblClickFn(event: any) {
    if (this.isEditCell || this.dblClickEdit) {
      this.startUpDblClick = true;
      event.isDblClick = true;
      if (this.isCellMerge) {
        event.row.isCellMerge = this.isCellMerge;
      }
    }
  }

  onClickTreeBtn(event: any) {
    if (event[0].target.className === "collapse") {
      event[0].target.className = "expand";
      this.isZhanKai = true;
    } else {
      event[0].target.className = "collapse";
      this.isZhanKai = false;
    }
    this.treeEvent.emit({
      isZhanKai: this.isZhanKai,
      row: event[1],
    });
  }

  onclick(row: any) {

    this.userSelectRow.emit(row)
  }

  onMouseenter(e: any, row: any) {
    if (!this.hasBgc && !row.isSelected) {
      if (this.hoverBgc.isShow) {
        e.target.setAttribute('style', `background: ${this.hoverBgc.bgc}`);
      }
    }
  }
  onMouseleave(e: any, row: any) {
    if (!this.hasBgc) {
      e.target.setAttribute('style', "background:''");
    }
    if (this.hasClickBgc && row.isSelected) {
      e.target.setAttribute('style', `background: ${this.clickBgc['bgc']}`);
    }

  }

  clearWarning(html: any): any {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
