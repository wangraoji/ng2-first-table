import { Component, Input, Output, EventEmitter, OnChanges,} from '@angular/core';
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

    toolData: any;

    ngOnChanges() {
        this.toolData = this.grid.getSetting('toolData');
    }

    tooglClass: boolean = false;
    togClass(event: any) {
        if (event.className === 'topIcon') {
            event.className = 'bomIcon';
            this.tooglClass = true;

        } else {
            event.className = 'topIcon';
            this.tooglClass = false;
        }
    }
}