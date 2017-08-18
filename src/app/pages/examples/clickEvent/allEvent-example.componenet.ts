import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'allEvenet-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"
      (userRowSelect)="userRowSelect($event)"
      (dbSelect)="dblclick($event)"
      ></ng2-first-table>
  `,
})

export class AllEventExampleComponent {
    settings = {
        selectMode: 'allEvent', // 所有事件
        danjiIsMultion: true, // 单击时启动多选
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

    source: LocalDataSource;
    
    // 判断是不是单击
    isClick: boolean;

    constructor() {
        this.source = new LocalDataSource(this.data);
    }

    // 单击事件方法 方法名自定义
    userRowSelect(event): void {
        this.isClick = false;
        setTimeout(() => {
            if (this.isClick) {
                return;
            }
            console.info(`-----单击 Beg -----`);
            console.info(event);
            console.info(`-----单击 End -----`);
        }, 500);
    }


    // 双击事件方法 方法名自定义
    dblclick(event): void {
        this.isClick = true;
        console.info(`-----双击 Beg -----`);
        console.info(event);
        console.info(`-----双击 End -----`);
    }
}
