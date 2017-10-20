import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'settings-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"></ng2-first-table>
  `,
})

export class SettingsExampleComponent {
    settings = {
        danjiIsMultion: true,
        // 自定义工具栏
        toolData: {
            isShow: true, 
            // 自定义行设置
            columnRowSetting: {
                // 设置是否显示
                isShow: true,
                // 设置行高
                setTrHieht: {
                    isShow: true,
                    setTrHiehtContent: '设置行高',
                },
                // 允许行拖动
                setTrMove: {
                    isShow: true,
                    setTrMoveContent: '开启行拖动',
                },
                // 查看明细
                details: {
                    isShow: true,
                    detailsContent: '查看明细',
                },
                // 双击编辑
                editCell: {
                    isShow: true,
                    editCellContent:'开启编辑'
                }
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
