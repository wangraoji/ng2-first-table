import { Row } from './row';
import { Column } from './column';

export class DataSet {

  newRow: Row;
  protected data: Array<any> = [];
  protected columns: Array<Column> = [];
  protected rows: Array<Row> = [];
  protected selectedRow: Row;
  protected willSelect: string = 'first';
  // 设置 单击 是否需要多选
  protected danjiIsMultion: boolean;
  // 设置 selectMode 存在就不要第一行默认选中
  protected selectMode: string;

  // 设置 按住 ctrl 是否启动多选
  protected isCtrlMulti: boolean;
  constructor(data: Array<any> = [], protected columnSettings: Object, danjiIsMultion: boolean, selectMode: string, isCtrlMulti: boolean) {
    this.createColumns(columnSettings);
    this.setData(data);
    // 设置 单击 是否需要多选
    this.setDanjiIsMultion(danjiIsMultion);

    // 设置 按住 ctrl 是否启动多选
    this.setCtrlMulti(isCtrlMulti);

    this.createNewRow();

    // 设置 selectMode 存在就不要第一行默认选中
    this.selectMode = selectMode;  
  }

  setData(data: Array<any>) {
    this.data = data;
    this.createRows();
  }

  // 设置 单击 是否需要多选
  setDanjiIsMultion(danjiIsMultion: boolean) {
    this.danjiIsMultion = danjiIsMultion;
  }

  // 设置 按住 ctrl 是否启动多选
  setCtrlMulti(isCtrlMulti: boolean) {
    this.isCtrlMulti = isCtrlMulti;
  }

  getColumns(): Array<Column> {
    return this.columns;
  }

  getRows(): Array<Row> {

    return this.rows;
  }

  getFirstRow(): Row {
    return this.rows[0];
  }

  getLastRow(): Row { 
    return this.rows[this.rows.length - 1];
  }

  findRowByData(data: any): Row {
    return this.rows.find((row: Row) => row.getData() === data);
  }

  deselectAll() {    
    this.rows.forEach((row) => {
      row.isSelected = false;
    });
  }

  selectRow(row: Row): Row {
    const previousIsSelected = row.isSelected;
    
 
    // 如果 单击需要 多选 就不执行清空
    if (!this.danjiIsMultion) {
      this.deselectAll();
    }
    if (this.isCtrlMulti) {
      window.onkeydown = (e) => {
        if (e.key == "Control") {
          this.danjiIsMultion = true;
        }
      }
      window.onkeyup = (e) => {
        if (e.key == "Control") {
          this.danjiIsMultion = false;
        }
      }
    }

    row.isSelected = !previousIsSelected;
    this.selectedRow = row;
  
    return this.selectedRow;
  }

  multipleSelectRow(row: Row): Row {
    row.isSelected = !row.isSelected;
    this.selectedRow = row;
    return this.selectedRow;
  }

  selectPreviousRow(): Row {
    if (this.rows.length > 0) {
      let index = this.selectedRow ? this.selectedRow.index : 0;
      if (index > this.rows.length - 1) {
        index = this.rows.length - 1;
      }
      this.selectRow(this.rows[index]);
      return this.selectedRow;
    }
  }

  selectFirstRow(): Row {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[0]);
      return this.selectedRow;
    }
  }

  selectLastRow(): Row {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[this.rows.length - 1]);
      return this.selectedRow;
    }
  }

  willSelectFirstRow() {
    this.willSelect = 'first';
  }

  willSelectLastRow() {
    this.willSelect = 'last';
  }

  select(): Row {
    // console.info(this.selectMode);
    if (this.getRows().length === 0) {
      return;
    }
    if (this.willSelect) {
      if (this.willSelect === 'first' && !this.selectMode) {
        this.selectFirstRow();
      }
      if (this.willSelect === 'last') {
        this.selectLastRow();
      }
      this.willSelect = '';
    } else {
      // 新增一条后，不给焦点
      if (this.selectMode) {
        return;
      }
      this.selectFirstRow();
    }

    return this.selectedRow;
  }

  createNewRow() {
    this.newRow = new Row(-1, {}, this);
    this.newRow.isInEditing = true;
  }

  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
  createColumns(settings: any) {
    for (const id in settings) {
      if (settings.hasOwnProperty(id)) {
        this.columns.push(new Column(id, settings[id], this));
      }
    }
  }

  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  createRows() {

    
    this.rows = [];
    this.data.forEach((el, index) => {
      this.rows.push(new Row(index, el, this));
    });

    // console.info(this.rows);
    // // console.info();
    // this.rows.forEach( el => {
    //     // console.info(el);
    //     el.isSelected = false;
    //     console.info(el.isSelected);
    //     console.info(el);
    // });
  }
}
