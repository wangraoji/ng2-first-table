import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'customEditingColumns-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"></ng2-first-table>
  `,
})

export class CustomEditingColumnsExampleComponent {
    name: string = 'zs';
    /*
    
                  selectMode: 'multi', // 复选框
                    hideSubHeader: true,
                    actions: {
                        columnTitle: 'Actions',
                        add: false,
                        edit: false,
                        delete: false,
                        position: 'left', // left|right
                    },
                    columns: firstTableData.theadData,
    */
    settings = {
        // selectMode: 'multi', // 复选框
        // 开启多选
        danjiIsMultion: true,
        // 开启自定义列
        customizeColumn: true,
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            id: {
                title: 'ID',
                html: `<i class='icon'></i>{title}`,
            },
            name: {
                title: 'Full Name',
                html: `{title}`,
            },
            username: {
                title: 'User Name',
                html: `{title}`,
            },
            email: {
                title: 'Email',
                html: `{title}<i class='icon1'></i>`,
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
