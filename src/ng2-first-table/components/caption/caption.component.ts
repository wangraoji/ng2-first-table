import { Component, Input, Output, EventEmitter, OnChanges, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';

@Component({
    selector: '[ng2-st-caption]',
    templateUrl: './caption.component.html',
    styleUrls: ['./caption.component.scss'],
})

export class Ng2FirstTableCaptionComponent {

    @Input() grid: Grid;

    @Input() trToolSubtotalIsShow: boolean;
    @Input() trToolTotalIsShow: boolean;

    // 新增事件
    @Output() toolAdd = new EventEmitter<any>();

    // 编辑事件
    @Output() toolEdit = new EventEmitter<any>();

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

    toolData: any;

    ngOnChanges() {
        this.toolData = this.grid.getSetting('toolData');
    }

    summarytgc: boolean = false;
    setStyletgc: boolean = false;
    toIsDrop: boolean = false;

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
        event.target.value = event.target.value.replace(/[^0-9-]+/, '');
        if (event.target.value * 1 >= 100) { event.target.value = 100 };
        if (event.keyCode === 13) {
            if (event.target.value * 1 <= 20) { event.target.value = 20 };
            this.trHeight.emit(event.target.value);
        }
    }

    // 设置是否启用行拖拽
    onIsDrop() {
        this.isDrop.emit(this.toIsDrop)
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



}