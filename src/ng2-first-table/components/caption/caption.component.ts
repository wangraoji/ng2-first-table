import { Component, Input, Output, EventEmitter, OnChanges, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import { forIn } from 'lodash';

@Component({
    selector: '[ng2-st-caption]',
    templateUrl: './caption.component.html',
    styleUrls: ['./caption.component.scss'],
})

export class Ng2FirstTableCaptionComponent {

    @Input() grid: Grid;

    @Input() trToolSubtotalIsShow: boolean;
    @Input() trToolTotalIsShow: boolean;
    @Input() toolNeedData: any;
    @Input() tableColDatas: any;

    @Input() toolClickStatus: any;

    // 保存事件
    @Output() toolSave = new EventEmitter<any>();
    // 删除事件
    @Output() toolDelete = new EventEmitter<any>();

    // 小计事件
    @Output() toolSubtotal = new EventEmitter<any>();

    // 总计事件
    @Output() toolTotal = new EventEmitter<any>();

    // 行高 px
    @Output() trHeight = new EventEmitter<any>();

    // 行拖拽
    @Output() isDrop = new EventEmitter<any>();

    // 开启编辑列
    @Output() toEditCell = new EventEmitter<any>();

    // 设置-查看明细-发射允许插入
    @Output() allowToInsert = new EventEmitter<any>();

    // 遮罩层
    @Output() isZhezhaoShow = new EventEmitter<any>();

    // 导出Excel
    @Output() exportExcelFn = new EventEmitter<any>();

    @Output() newTableColDatas = new EventEmitter<any>();


    toolData: any;



    // ---------- begin 增删改部分 ----------
    // 当前状态
    nowStatus: string = null;
    // ---------- end   增删改部分 ----------


    constructor() {
        // console.log(AddButtonComponent);
    }

    ngOnChanges() {
        this.toolData = this.grid.getSetting('toolData');
        if (this.toolNeedData) {
            if (this.toolNeedData.isDuoHang) {
                this.toIsDrop = !this.toolNeedData.isDuoHang;
                this.isAllowToInsert = !this.toolNeedData.isDuoHang;
                this.isDrop.emit(this.toIsDrop);
                this.allowToInsert.emit(this.isAllowToInsert);
            } else {
                if (this.toolNeedData.datas) {

                    if (this.toolNeedData.datas.length <= 0) {
                        this.toIsDrop = false;
                        this.isAllowToInsert = false;
                        this.isDrop.emit(this.toIsDrop);
                        this.allowToInsert.emit(this.isAllowToInsert);
                    }
                }

            }
        }

        this.editCellText();

    }

    summarytgc: boolean = false;
    setStyletgc: boolean = false;
    toIsDrop: boolean = false;

    // 表格列-显示隐藏
    colShowHide: any;

    // 编辑列是否开启
    isEditCell: boolean = false;

    // 设置-查看明细-是否允许插入 默认 false
    isAllowToInsert: boolean = false;
    // 汇总
    summaryTgc(event: any) {
        this.summarytgc = this.zhixing(event);
    }

    // 设置
    setStyleTgc(event: any) {
        this.setStyletgc = this.zhixing(event);
    }

    // 设置行高
    setTrHeiht(event: any) {
        let defaultLH = this.toolData.columnRowSetting.setTrHieht.default;
        event.target.value = event.target.value.replace(/[^0-9-]+/, '');
        if (event.target.value * 1 >= 100) { event.target.value = 100 };
        if (event.keyCode === 13) {
            if (event.target.value * 1 <= defaultLH) { event.target.value = defaultLH };
            this.trHeight.emit(event.target.value);
        }
    }

    // 设置是否启用行拖拽
    onIsDrop(event: any) {
        this.isAllowToInsert = false;
        this.allowToInsert.emit(this.isAllowToInsert);
        this.chongfu(event);
    };

    lookDetails(event: any) {
        this.toIsDrop = false;
        this.isDrop.emit(this.toIsDrop);
        this.chongfu(event);
    }


    // 执行显示隐藏操作
    zhixing(event: any) {
        if (event.className === 'topIcon') {
            event.className = 'bomIcon';
            return true;
        } else {
            event.className = 'topIcon';
            return false;
        }
    }

    // 开启编辑单元格
    editCellFn(event: any, setEditCell: any) {
        if (event.target.checked) {
            this.isEditCell = true;
        } else {
            this.isEditCell = false;
        }

        this.editCellText();
        this.toEditCell.emit(this.isEditCell);
    }

    editCellText() {
        if (this.isEditCell) {
            this.toolData.columnRowSetting.editCell.editCellContent = '关闭编辑';
        } else {
            this.toolData.columnRowSetting.editCell.editCellContent = '开启编辑';
        }
    }
    // 重复的方法
    chongfu(event: any) {
        // 判断是否有选中行的数据
        if (this.toolNeedData.datas) {
            // 判断选中行的数据有没有多行 有就弹出遮罩层
            if (this.toolNeedData.isDuoHang) {
                event.target.checked = false;
                this.isZhezhaoShow.emit({
                    isShow: !event.target.checked,
                    content: `选中行大于 1`
                });
            } else {
                // 判断选中行数据是否存在数据 有可能为空（例：先选中，再不选中，则为空）
                if (this.toolNeedData.datas.length > 0) {
                    this.isDrop.emit(this.toIsDrop);
                    this.allowToInsert.emit(this.isAllowToInsert);
                } else {
                    // 如果没有数据就弹出遮罩层
                    event.target.checked = false;
                    this.isZhezhaoShow.emit({
                        isShow: !event.target.checked,
                        content: `暂未选中数据`
                    });
                }

            }
        } else {
            // 如果没有数据就弹出遮罩层
            event.target.checked = false;
            this.isZhezhaoShow.emit({
                isShow: !event.target.checked,
                content: `暂未选中数据`
            });
        }
    }

    // 表格列-显示隐藏
    onShowOrHide(event: any) {
        this.colShowHide = this.zhixing(event);
    }
    toShowOrHide(event: any) {
        this.newTableColDatas.emit(event);
    }



    // 新增事件
    toolAdd() {
        this.nowStatus = this.toolClickStatus.add;
        this.grid.createFormShown = true;
    }

    // 编辑事件
    toolEditFn() {
        this.nowStatus = this.toolClickStatus.edit;
        const rows = this.grid.getSelectedRows();
        rows.forEach((el: any) => {
            this.grid.edit(el);
        })
    }

    // 删除事件
    toolDeleteFn() {
        const rows = this.grid.getSelectedRows();
        this.toolDelete.emit(rows);
    }

    // 保存事件
    toolSaveFn() {
        const rows = this.grid.getSelectedRows();
        this.toolSave.emit({
            nowStatus: this.nowStatus,
            rows: rows,
        });
    }

    // 取消事件
    toolCancelFn(event: any) {
        event.preventDefault();
        event.stopPropagation();
        const rows = this.grid.getSelectedRows();
        this.grid.createFormShown = false;
        rows.forEach((el: any) => {
            el.isInEditing = false;
        })
    }
}