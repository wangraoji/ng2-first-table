import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { Column } from "../../../lib/data-set/column";
// ./lib/data-source/local/local.data-source
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
@Component({
  selector: '[ng2-st-thead-titles-row]',
  templateUrl:'./thead-titles-row.component.html',
  styleUrls: ['./thead-titles-row.component.scss'],
})
export class TheadTitlesRowComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() isAllSelected: boolean;
  @Input() source: DataSource;
  @Input() customizeColumn: boolean;
  
  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();
  // 自定义列-列格式化-发射导出的参数
  @Output() columnFormatPar = new EventEmitter<any>();
  // 表格列-自定列隐藏-发射导出的参数
  @Output() columnIsHidePar = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;

  // 自定义列设置
  columnSetting: any;
  showColumnSetting: boolean;

  // 自定义列设置-获取当前点击列
  columnData: any;

  // 自定义列设置-列格式化
  columnFormat: any;
  // 自定义列设置-列隐藏
  columnIsHide: any;



  ngOnChanges() {
    // console.info(this.grid.getColumns());

    // 自定义列设置
    this.columnSetting = this.grid.getSetting('columnSetting');
    this.showColumnSetting = this.columnSetting.isShow;
    this.columnFormat = this.columnSetting.columnFormat;
    this.columnIsHide = this.columnSetting.columnIsHide;

    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');

    
  }

  // 自定义列设置-列点击
  onColumnSetting(event: any, columnData: any) {
    // 获取当前点击的列
    this.columnData = columnData;

    // 判断箭头是向上还是向下 想上下一个兄弟元素 UL 就显示，向上就隐藏
    if (event.target.className === 'topIcon') {
      event.target.className = 'bomIcon';
      event.target.nextElementSibling.className = 'showColumn';
    } else {
      event.target.className = 'topIcon';
      event.target.nextElementSibling.className = 'hideColumn';
    }

  }

  // 自定义列设置-列格式化-列点击
  setColumn(event: any) {
    // 接受可选配置，得到一个正则，例如这里可选参数是 ￥$% 拼成正则就是 /[^￥$%]/g
    // 意思就是非这个的不让输入
    let rex = new RegExp("[^" + this.columnFormat.optional + "]", "g");
    event.target.value = event.target.value.replace(rex, '');
    // 当输入的个数大于1的时候，就要删除的2个
    if (event.target.value.length > 1) {
      // 字符串是从 0 开始，所以保留第0个，删除第1个。 当你输入了1个，它是0，保留，
      // 再输入的时候就是2个，它就是1，删除。所以无论你怎么输入，只要大于1就会被删除
      event.target.value = event.target.value.substring(0, 1);
    }
    // 如果是按回车键就要把当前输入的值给设置到当前列上
    if (event.keyCode === 13) {
       this.columnFormatPar.emit([event.target.value,this.columnData.id]);
    }
  }

  onColumnIsHide(event:any){
    this.columnIsHidePar.emit(this.columnData.id);
  }

}
