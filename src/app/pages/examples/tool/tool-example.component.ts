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
      (toolDelete)="onToolDelete($event)"
      (toolEdit)="onToolEdit($event)"
      (toolAdd)="onToolAdd($event)"></ng2-first-table>
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

    deleteData = [];

    source: LocalDataSource;

    constructor(private http: Http) {
        this.http.get('assets/toolData/toolData.json')
            .subscribe((res: Response) => {
                this.source = new LocalDataSource(res.json().toolData);
            });
    }

    rouSelect(event) {
        // 这是我复选框勾选的 数组对象
        const selecteds = event.selected;
        this.deleteData = [];
        // this.data.forEach(el => {
        //     if (!_.some(selecteds, el)) {
        //         this.deleteData.push(el);
        //     }
        // });
    }

    onToolDelete(event) {
        console.info(`删除事件`);
        // this.source = new LocalDataSource(this.deleteData);
        // this.source  = new LocalDataSource([{
        //     id: 5,
        //     name: 'Chelsey Dietrich',
        //     username: 'Kamren',
        //     email: 'Lucio_Hettinger@annie.ca',
        // }]);
    }

    onToolEdit(event){
        console.info('编辑事件');
    }

    onToolAdd(event){
        console.info('新增事件');
    }
}
