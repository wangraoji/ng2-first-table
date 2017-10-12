import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'formattingCol-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"></ng2-first-table>
  `,
})

export class FormattingColExampleComponent {
    name: string = 'zs';
    settings = {
        // 开启多选
        danjiIsMultion: true,
        // 自定义工具栏
        toolData: {
            isShow: true,
            toolAdd: {
                isShow: true,
                liClass: '',
                toolAddContent: '新增',
                confirmAdd: true,
            },
            toolDelete: {
                isShow: true,
                liClass: '',
                toolDeleteContent: '删除',
                confirmDelete: true,
            },
            toolEdit: {
                isShow: true,
                liClass: '',
                toolEditContent: '编辑',
                confirmEdit: true,
            },
            exportExcel: {
                isShow: true,
                liClass: '',
                exportExcelContent: '导出Excel',
            },
            summary: {
                isShow: true,
                toolSubtotal: {
                    isShow: true,
                    liClass: '',
                    toolSubtotalContent: '小计',
                },
                toolTotal: {
                    isShow: true,
                    liClass: '',
                    toolTotalContent: '总计',
                },
            },
            columnRowSetting: {
                isShow: true,
                // 设置行高
                setTrHieht: {
                    isShow: true,
                    setTrHiehtContent: '设置行高',
                    default: 20,
                },
                // 单行选中行拖动
                setTrMove: {
                    isShow: true,
                    setTrMoveContent: '选中行拖动',
                },
                // 查看明细
                details: {
                    isShow: true,
                    detailsContent: '查看明细',
                },
            },
            // 列显示隐藏
            columnsShowOrHide: {
                isShow: true,
            },
        },
        // 自定义列设置
        columnSetting: {
            isShow: true,
            columnFormat: {
                isShow: true,
                content: '列格式化',
                optional: '￥$%',
            },
            columnIsHide: {
                isHide: true,
                content: '列隐藏',
            },
        },
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            id: {
                title: 'ID',
            },
            name: {
                title: 'Full Name',
            },
            username: {
                title: 'User Name',
            },
            email: {
                title: 'Email',
            },
        },
    };

    data = [
        {
            id: 1,
            name: '10',
            username: '10',
            email: 'Sincere@april.biz',
        },
        {
            id: 2,
            name: '20',
            username: '20',
            email: 'Shanna@melissa.tv',
        },
        {
            id: 3,
            name: '30',
            username: '30',
            email: 'Nathan@yesenia.net',
        },
        {
            id: 4,
            name: '40',
            username: '40',
            email: 'Julianne.OConner@kory.org',
        },
        {
            id: 5,
            name: '50',
            username: '50',
            email: 'Lucio_Hettinger@annie.ca',
        },
    ];

    source: LocalDataSource;

    constructor() {
        this.source = new LocalDataSource(this.data);
        // console.info(`${ this.settings.columns.id.title }`);
    }

}
