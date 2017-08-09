import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import * as _ from 'lodash';

@Component({
    selector: 'tool-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"
      (rowSelect)="rouSelect($event)"
      (toolDelete)="ontoolDelete($event)"></ng2-first-table>
  `,
})

export class ToolExampleComponent {
    settings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        selectMode: 'multi',
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
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
        },
    ];

    deleteData = [];

    source: LocalDataSource;

    constructor(private http: Http) {
        // this.source = new LocalDataSource(this.data);
console.log("请求");
        this.http.get('http://localhost:3000/api/ng2FirstTable/toolData')
            .subscribe((res: Response) => {
                console.info(res.json());
            });
    }

    rouSelect(event) {
        // 这是我复选框勾选的 数组对象
        const selecteds = event.selected;
        this.deleteData = [];
        this.data.forEach(el => {
            if (!_.some(selecteds, el)) {
                this.deleteData.push(el);
            }
        });
    }

    ontoolDelete(event) {
        console.info(this.deleteData);
        // this.source = new LocalDataSource(this.deleteData);
        // this.source  = new LocalDataSource([{
        //     id: 5,
        //     name: 'Chelsey Dietrich',
        //     username: 'Kamren',
        //     email: 'Lucio_Hettinger@annie.ca',
        // }]);
    }
}
