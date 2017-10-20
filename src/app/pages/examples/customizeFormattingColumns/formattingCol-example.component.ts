import { Component, Input , OnChanges} from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'formattingCol-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"
      (dbSelect)="dblclick($event)"></ng2-first-table>
  `,
})

export class FormattingColExampleComponent {
    name: string = 'zs';

 
    // toUpData: boolean = false;

    @Input() isEdit : any = true;

    

    settings = {
        // 开启多选
        danjiIsMultion: true,
        selectMode: 'allEvent', // 所有事件
        // 双击开启编辑
        // dblClickEdit: true,
        // 自定义工具栏
        toolData: {
            isShow: true,
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
                // 双击编辑单元格
                editCell: {
                    isShow: true,
                    editCellContent: '开启编辑'
                }
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
                type: 'inputCheckbox',
                disabled: `${this.isEdit}`,
            },
            isLogin: {
                title: '是否允许登陆',
                type: 'inputCheckbox',
            }
        },
        pager: {
            display: true,
            perPage: 3,
        },
    };

    data = [
        {
            id: 1,
            name: '10',
            username: '10',
            email: false,
            isLogin: true,
        },
        {
            id: 2,
            name: '20',
            username: '20',
            email: false,
            isLogin: false,
        },
        {
            id: 3,
            name: '30',
            username: '30',
            email: true,
            isLogin:true,
        },
        // {
        //     id: 4,
        //     name: '40',
        //     username: '40',
        //     email: 'Julianne.OConner@kory.org',
        //     isLogin: 'true',
        // },
        // {
        //     id: 5,
        //     name: '50',
        //     username: '50',
        //     email: 'Lucio_Hettinger@annie.ca',
        //     isLogin: '<input type="checkbox"/>',
        // },
        // {
        //     id: 6,
        //     name: '50',
        //     username: '50',
        //     email: 'Lucio_Hettinger@annie.ca',
        //     isLogin: 'true',
        // },
        // {
        //     id: 7,
        //     name: '50',
        //     username: '50',
        //     email: 'Lucio_Hettinger@annie.ca',
        //     isLogin: 'true',
        // },
        // {
        //     id: 8,
        //     name: '50',
        //     username: '50',
        //     email: 'Lucio_Hettinger@annie.ca',
        //     isLogin: 'true',
        // },
        // {
        //     id: 9,
        //     name: '50',
        //     username: '50',
        //     email: 'Lucio_Hettinger@annie.ca',
        //     isLogin: 'true',
        // },
        // {
        //     id: 10,
        //     name: '50',
        //     username: '50',
        //     email: 'Lucio_Hettinger@annie.ca',
        //     isLogin: 'true',
        // },
    ];

    source: LocalDataSource;

    constructor() {
        this.source = new LocalDataSource(this.data);
        // console.info(`${ this.settings.columns.id.title }`);
    }

    dblclick(event): void {
        console.info(event);
    }

    // ngOnChanges(){
    //     this.toUpData = !this.toUpData;
    // }

}
