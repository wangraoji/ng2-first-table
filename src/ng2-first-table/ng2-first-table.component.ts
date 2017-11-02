import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef, OnInit } from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';

// import { HttpUrlEncodingCodec } from '@angular/common/http';

import { forIn } from 'lodash';

@Component({
    selector: 'ng2-first-table',
    styleUrls: ['./ng2-first-table.component.scss'],
    templateUrl: './ng2-first-table.component.html',
})
export class Ng2FirstTableComponent implements OnChanges {

    @Input() source: any;
    @Input() settings: any = {};

    @Output() rowSelect = new EventEmitter<any>();
    @Output() userRowSelect = new EventEmitter<any>();
    // 自定义单元行 双击事件
    @Output() dbSelect = new EventEmitter<any>();

    // 自定义工具栏 新增事件
    @Output() toolAdd = new EventEmitter<any>();
    // 自定义工具栏 编辑事件
    @Output() toolEdit = new EventEmitter<any>();
    // 自定义工具栏 删除事件
    @Output() toolDelete = new EventEmitter<any>();


    @Output() delete = new EventEmitter<any>();
    @Output() edit = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();
    @Output() custom = new EventEmitter<any>();
    @Output() deleteConfirm = new EventEmitter<any>();
    @Output() editConfirm = new EventEmitter<any>();
    @Output() createConfirm = new EventEmitter<any>();
    // @Output() rowHover: EventEmitter<any> = new EventEmitter<any>();



    tableClass: string;
    tableId: string;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    isPagerDisplay: boolean;
    rowClassFunction: Function;

    // 自定义隔行换色
    rowBgc: object;
    // 自定义表头背景色
    theadBgc: object;
    // 自定义当前点击的背景色
    clickBgc: object;
    // 自定义工具栏是否显示
    tool: boolean;

    // 自定义工具栏小计
    trToolSubtotalIsShow = false;
    trtoolSubtotalArr: any = [];
    trSubtotalData: any = [];
    trSelectArr: any = [];
    isIndx = 0;
    // 自定义工具栏总计
    trToolTotalIsShow = false;
    trToolTotalData: any = [];
    newObj: any;

    // 工具栏自定义-行高
    setTrHeight: any;

    // 工具栏自定义 - 行拖动
    rowDown: any;
    rowIndex: any;
    isBeg: any;
    isToDrop: any;

    // 工具栏自定义 - 编辑列
    isEditCell: boolean;

    // 自定义工具栏需要的行数据
    toolNeedData: object = {};

    // 自定义工具栏-设置-查看明细-默认没有选中数据为不显示
    allowToInsertData: any = {
        isShow: false,
    };

    // 遮罩层
    zheZhaoIsShow: any = {};

    // 自定义列设置-格式化列
    columnFormatPar: any;
    columnFormatId: any;
    isColumnFormat: boolean = false;       // 是开启列格式化
    oldSourceData: any;                    // 历史数据

    // 自定义列设置-自定义列
    customizeColumn: any;

    // 表格列-自定义隐藏列
    onColumnToHide: boolean;            // 是否是执行单击某列删除
    onColumnToHideId: any;              // 单击某列的列名

    duShowOrHide: boolean;              // 是否是执行复选框删除
    duShowOrHideId: any;                // 选中的列名

    doBoolean: boolean = false;         // 布尔值


    // 创建一个空的数组存放删除的表头和删除的数据
    delTableThead: any = [];


    grid: Grid;
    defaultSettings: Object = {
        mode: 'inline', // inline|external|click-to-edit
        selectMode: 'single', // single|multi|'dblclick'|'allEvent'
        // 单击 是否多选
        danjiIsMultion: false,
        isCtrlMulti: false,   // 默认不启动Ctrl多选
        isClickIcon: false,   // 默认不启动点击显示图标
        hideHeader: false,
        hideSubHeader: false,       // 隐藏搜索
        customizeColumn: false,     // 自定义列
        isCellMerge: false,         // 列合并
        dblClickEdit: false,        // 双击开启编辑
        actions: {
            columnTitle: 'Actions',
            add: true,
            edit: true,
            delete: true,
            custom: [],
            position: 'left', // left|right
        },
        filter: {
            inputClass: '',
        },
        edit: {
            inputClass: '',
            editButtonContent: '编辑',
            saveButtonContent: '确定',
            cancelButtonContent: '取消',
            confirmSave: false,
        },
        add: {
            inputClass: '',
            addButtonContent: '新增',
            createButtonContent: '确定',
            cancelButtonContent: '取消',
            confirmCreate: false,
        },
        delete: {
            deleteButtonContent: '删除',
            confirmDelete: false,
        },
        attr: {
            id: '',
            class: '',
        },
        noDataMessage: 'No data found',
        columns: {},
        pager: {
            display: true,
            perPage: 10,
        },

        rowClassFunction: () => "",

        // 自定义隔行换色
        rowBgc: {
            isShow: false,
            oddBgc: 'red',
            evenBgc: 'blue',
        },

        // 自定义当前点击的背景色
        clickBgc: {
            isShow: false,
            bgc: '#22a9b6',
        },

        // 自定义表头颜色
        theadBgc: {
            isShow: false,
            bgc: '#22a9b6',
        },


        // 自定义工具栏
        toolData: {
            isShow: false,
            toolAdd: {
                isShow: false,
                liClass: '',
                toolAddContent: '新增',
                confirmAdd: false,
            },
            toolDelete: {
                isShow: false,
                liClass: '',
                toolDeleteContent: '删除',
                confirmDelete: false,
            },
            toolEdit: {
                isShow: false,
                liClass: '',
                toolEditContent: '编辑',
                confirmEdit: false,
            },
            exportExcel: {
                isShow: false,
                liClass: '',
                exportExcelContent: '导出Excel',
            },
            summary: {
                isShow: false,
                toolSubtotal: {
                    isShow: false,
                    liClass: '',
                    toolSubtotalContent: '小计',
                },
                toolTotal: {
                    isShow: false,
                    liClass: '',
                    toolTotalContent: '总计',
                },
            },
            columnRowSetting: {
                isShow: false,
                // 设置行高
                setTrHieht: {
                    isShow: false,
                    setTrHiehtContent: '',
                    default: 20,
                },
                // 单行选中行拖动
                setTrMove: {
                    isShow: false,
                    setTrMoveContent: '',
                },
                // 查看明细
                details: {
                    isShow: false,
                    detailsContent: '',
                },
                // 双击编辑单元格
                editCell: {
                    isShow: false,
                    editCellContent: ''
                }
            },
            columnsShowOrHide: {
                isShow: false,
            },
        },

        // 自定义列设置
        columnSetting: {
            isShow: false,
            columnFormat: {
                isShow: false,
                content: '列格式化',
                optional: '￥$%',
            },
            columnIsHide: {
                isHide: false,
                content: '列隐藏',
            },
        },
    };

    isAllSelected: boolean = false;

    constructor(public el: ElementRef) {

    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        } else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');

        // 自定义隔行换色
        this.rowBgc = this.grid.getSetting('rowBgc');
        // 自定义表头背景色
        this.theadBgc = this.grid.getSetting('theadBgc');
        // 自定义当前点击的背景色
        this.clickBgc = this.grid.getSetting('clickBgc');

        // 自定义工具栏
        this.tool = this.grid.getSetting('toolData').isShow;
        this.grid.dataSet['columns'].forEach(el => {
            this.trtoolSubtotalArr.push(el.id);
        })

        this.customizeColumn = this.grid.getSetting('customizeColumn');

        this.oldSourceData = JSON.parse(JSON.stringify(this.source.data));

        // console.info(this.grid);
    }


    editRowSelect(row: Row) {
        if (this.grid.getSetting('selectMode') === 'multi' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.onMultipleSelectRow(row);
        } else {
            this.onSelectRow(row);
        }
    }


    onUserSelectRow(row: Row) {
        let tboyd = this.el.nativeElement.querySelectorAll('tbody'),
            trs = tboyd[0].children;

        for (let i = 0; i < trs.length; i++) {
            trs[i].setAttribute("isClick","false");
        }
        

        trs[row.index].setAttribute("isClick","true");   

        if (this.grid.getSetting('selectMode') === 'single' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }

        // 小计需要用到的数据
        this.trSubtotalData = this.grid.getSelectedRows();
        this.subtotal(this.isAddOrDel(this.isIndx, this.trSubtotalData.length));

        // 工具栏需要用到的数据
        this.toolNeedData = {
            isDuoHang: this.grid.getSelectedRows().length > 1 ? true : false,
            datas: this.grid.getSelectedRows(),
        };

        // 工具栏-设置-查看明细-每次更换行都不需要显示明细
        this.allowToInsertData.isShow = false;

    }

    // 自定义单元行 双击事件
    ondblclick(row: Row) {
        if (this.grid.getSetting('selectMode') === 'dblclick' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.grid.selectRow(row);
            this.emitDblSelectRow(row);
        }
    }
    // 自定义工具栏 新增事件
    onToolAdd() {
        this.toolAdd.emit();
    }

    // 自定义工具栏 编辑事件
    onToolEdit(event: any) {
        this.toolEdit.emit();
    }

    // 自定义工具栏 删除事件
    onToolDelete(event: any) {
        this.toolDelete.emit();
    }

    // 自定义工具栏 小计
    onToolSubtotal(event: any) {
        this.trToolSubtotalIsShow = event.target.checked;
        this.subtotal(false);
    }

    // 自定义工具栏 总计
    onToolTotal(event: any) {
        this.trToolTotalIsShow = event.target.checked;
        this.trToolTotalData = this.huizong(this.trtoolSubtotalArr.concat([]), this.grid.dataSet['rows']);
    }

    // 自定义工具栏 行高
    trHeight(event: any) {
        this.setTrHeight = event;
    }

    // 自定义工具栏 便捷列
    toEditCell(event: any) {
        this.isEditCell = event;
    }

    // 是否允许工具栏 行拖动
    isDrop(event: any) {
        this.isToDrop = event;
    }

    // 自定义工具栏行拖动-onmousedown
    onmousedown(event: any) {
        console.log(event);
        
        if (this.isToDrop) {
            if (event[1].isSelected) {
                this.isBeg = true;
                let o = event[0].target;
                while (o.rowIndex == undefined) {
                    o = o.parentNode;
                }
                this.rowIndex = this.grid.getSetting('hideSubHeader') ? o.rowIndex - 1 : o.rowIndex - 2;
                this.rowDown = event[1];
            }
        }
    }
    // 自定义工具栏行拖动-onkeydown
    onmouseup(event: any) {
        if (this.isToDrop) {
            // 当鼠标松开的时候，把鼠标按下的那个元素移动到这个元素的上面
            let o = event[0].target;
            while (o.rowIndex == undefined) {
                o = o.parentNode;
            }
            let endIndex = this.grid.getSetting('hideSubHeader') ? o.rowIndex - 1 : o.rowIndex - 2;
            if (this.isBeg) {
                this.grid.dataSet['rows'].splice(this.rowIndex, 1);
                this.grid.dataSet['rows'].splice(endIndex, 0, this.rowDown);
                this.grid.dataSet['rows'].forEach((el, i) => {
                    el.index = i;
                })
                this.isBeg = false;
            }
        }
    }

    // 自定义工具栏-设置-查看明细
    allowToInsert(event: any) {
        let contBox = `<div>我是虚拟DOM</div>`;

        this.allowToInsertData.isShow = event;
        this.allowToInsertData.colspan = this.el.nativeElement.querySelector('thead').children[0].children.length;
        this.allowToInsertData.content = contBox;


        if (event) {
            setTimeout(() => {
                this.trSelectArr = [];
                let tbody = this.el.nativeElement.querySelector('tbody');
                let needChaTr = this.el.nativeElement.querySelector('.allowToInsert');
                this.trSubtotalData.forEach((el: any) => {
                    this.trSelectArr.push(el.index);
                });
                let haveTr = tbody.children[Math.max.apply(null, this.trSelectArr) + 1];
                tbody.insertBefore(needChaTr, haveTr);
            }, 1)
        }
    }

    // 自定义工具栏-设置-导出Excel
    exportExcelFn(event: any) {
        // let enc = new HttpUrlEncodingCodec();
        // let table = this.el.nativeElement.querySelector('table');
        // let uri = 'data:application/vnd.ms-excel;base64,',
        //     template = `<html><meta http-equiv="Content-Type" charset=utf-8"><head></head><body><table border="1" spellcheck="0">{table}</table></body></html>`,
        //     base64 = (s: any) => {
        //         return window.btoa(enc.decodeKey(s))
        //     },
        //     format = function (s: any, c: any) {
        //         return s.replace(/{(\w+)}/g, (m: any, p: any) => {
        //             return c[p];
        //         })
        //     };
        // var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
        // enc.decodeKey(format(template, ctx)))
        // console.info(enc.decodeKey(format(template, ctx)));
    }

    // 表格列-自定义格式化列
    onColumnFormatPar(event: any) {
        this.columnFormatPar = event[0];
        this.columnFormatId = event[1];
        this.isColumnFormat = true;
        this.initGrid();
    }

    // 表格列-自定义隐藏列
    onColumnIsHidePar(event: any) {
        // 是执行单击某列删除
        this.onColumnToHide = true;
        this.duShowOrHide = false;

        this.onColumnToHideId = event;
        this.doBoolean = true;
        this.initGrid();
    }


    // tree表格
    treeEventFn(event: any) {

        if (event.isZhanKai) {
            let row = event.row;

            let tbody = this.el.nativeElement.querySelector('tbody');
            let haveTr = tbody.children[row.index];
            // let needChaTr = `
            //     <tr>
            //         <td clospan="5"></td>
            //     </tr>
            // `
            // tbody.insertBefore(needChaTr, haveTr);
            console.info(`展开`);
            console.info(haveTr)

        } else {
            console.info(`收缩`);
        }


    }


    getNewTableColDatas(event: any) {
        // 是否是执行复选框删除
        this.duShowOrHide = true;
        this.onColumnToHide = false;

        this.duShowOrHideId = event.id;
        this.doBoolean = event.settings.isHide;

        this.initGrid();
    };

    multipleSelectRow(event: any) {
        event[0].stopPropagation();
        const row = event[1];
        if (this.grid.getSetting('selectMode') === 'multi' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.grid.multipleSelectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
            this.emitDblSelectRow(row);
        }
    }

    onSelectAllRows($event: any) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
        this.emitDblSelectRow(null);
    }

    onSelectRow(row: Row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }

    onMultipleSelectRow(row: Row) {
        this.emitSelectRow(row);
    }

    initGrid() {
        // 表格列-自定义格式化列
        if (this.isColumnFormat) {
            if (this.columnFormatPar === "") {
                this.source.data = this.oldSourceData;
            } else {
                this.source.data.forEach((el: any) => {
                    el[this.columnFormatId] = '' + el[this.columnFormatId] + this.columnFormatPar;
                });
            }
        }

        // 表格列-自定义隐藏列
        if (this.onColumnToHide) {
            // 单击某列隐藏
            this.settings.columns[this.onColumnToHideId].isHide = this.doBoolean;
        }

        if (this.duShowOrHide) {
            // 复选框选中某列隐藏
            this.settings.columns[this.duShowOrHideId].isHide = !this.doBoolean;
        }

        // 如果开启了自定义列
        if (this.settings.customizeColumn) {
            forIn(this.settings.columns, (v: any, k: any) => {
                let jxHtml = v.html + '';
                if (jxHtml.replace('{title}', "") != "") {
                    this.source.data.forEach((el: any) => {
                        let leftOfright = jxHtml.split('{title}');
                        if (leftOfright.indexOf("") === 0) {
                            el[k] = el[k] + jxHtml.replace('{title}', "");
                        } else {
                            el[k] = jxHtml.replace('{title}', "") + el[k];
                        }
                    });
                }
            });
        };
       
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }

    prepareSource(): DataSource {
        if (this.source instanceof DataSource) {
            return this.source;
        } else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }

        return new LocalDataSource();
    }

    prepareSettings(): Object {
        if (this.settings.customizeColumn) {
            forIn(this.settings.columns, (v: any, k: any) => {
                let jxHtml = v.html + '';
                v.html = jxHtml.replace('{title}', v.title);
            });
        }

        return deepExtend({}, this.defaultSettings, this.settings);
    }

    changePage($event: any) {
        this.resetAllSelector();
    }

    sort($event: any) {
        this.resetAllSelector();
    }

    filter($event: any) {
        this.resetAllSelector();
    }

    private resetAllSelector() {
        this.isAllSelected = false;
    }

    private emitUserSelectRow(row: Row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
        });
    }

    private emitSelectRow(row: Row) {
        const selectedRows = this.grid.getSelectedRows();
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
        });
    }

    private emitDblSelectRow(row: Row) {
        const selectedRows = this.grid.getSelectedRows();
        this.dbSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
        });
    }

    // 汇总方法
    huizong(data: any, needData: any): any {
        let begData = data.concat([]),
            endData = data.concat([]);
        this.newObj = {};
        begData.forEach((el: any, i: any) => {
            this.newObj[el] = [];
            needData.forEach((el1: any) => {
                if (el !== 'id' && !isNaN(el1.data[el] * 1)) {
                    this.newObj[el].push(el1.data[el] * 1);
                }
            });
            this.newObj[el] = eval(this.newObj[el].join("+"));
        });
        endData.forEach((el: any, i: any) => {
            if (this.newObj[el] !== undefined) {
                endData[i] = this.newObj[el];
            } else {
                endData[i] = '';
            }
        });
        return endData;
    };

    // 小计插入
    subtotal(isAddOrDel: boolean) {
        if (this.trToolSubtotalIsShow) {
            setTimeout(() => {
                this.trSelectArr = [];
                let tbody = this.el.nativeElement.querySelector('tbody');
                let needChaTr = this.el.nativeElement.querySelector('.subtotal');
                this.trSubtotalData.forEach((el: any) => {
                    this.trSelectArr.push(el.index);
                });
                let haveTr;
                if (isAddOrDel) {
                    if (this.isIndx === 1) {
                        haveTr = tbody.children[Math.max.apply(null, this.trSelectArr) + 1];
                    } else {
                        haveTr = tbody.children[Math.max.apply(null, this.trSelectArr) + 2];
                    }
                } else {
                    haveTr = tbody.children[Math.max.apply(null, this.trSelectArr) + 1];
                }

                tbody.insertBefore(needChaTr, haveTr);
            }, 1)
        }
    }

    // 判断是加是减
    isAddOrDel(n1: number, n2: number) {
        if (n2 - n1 > 0) {
            this.isIndx = n2;
            return true;
        } else if (n2 - n1 < 0) {
            this.isIndx = n2;
            return false;
        }
    }

    // 遮罩层
    isZhezhaoShow(event: any) {
        this.zheZhaoIsShow = event;
        setTimeout(() => {
            this.zheZhaoIsShow.isShow = false;
        }, 2000);
    }


}
