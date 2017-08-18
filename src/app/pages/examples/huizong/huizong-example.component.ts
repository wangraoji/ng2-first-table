import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'Huizong-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"></ng2-first-table>
  `,
})

export class HuizongExampleComponent {
    settings = {
        // 开启多选
        danjiIsMultion: true,
        // 自定义工具栏
        toolData: {
            isShow: true, 
            isSummaryShow: true,
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
                liClass: 'edit',
                toolEditContent: '编辑',
                confirmEdit: true,
            },
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
            toolSummary: {
                isShow: false,
                liClass: '',
                toolSummaryContent: ['小计', '总计', '平均', '最大值', '最小值'],
            },
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
    }

}
