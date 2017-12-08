import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'serverPager-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"
      (serverChangePage)="serverChangePage($event)"
      ></ng2-first-table>
    <button (click)="btnClick()">加十条数据</button>
  `,
})

export class ServerPagerExampleComponent {
    settings: any;

    tableData1 = {
        count: 81,
        currentPage: 1,
        data: [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 1,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 1,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 1,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 1,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 1,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 1,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 1,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 1,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            // {
            //     id: 2,
            //     name: 'Leanne Graham',
            //     username: 'Bret',
            //     email: 'Sincere@april.biz',
            // },
            // {
            //     id: 2,
            //     name: 'Ervin Howell',
            //     username: 'Antonette',
            //     email: 'Shanna@melissa.tv',
            // },
            // {
            //     id:2,
            //     name: 'Clementine Bauch',
            //     username: 'Samantha',
            //     email: 'Nathan@yesenia.net',
            // },
            // {
            //     id: 2,
            //     name: 'Patricia Lebsack',
            //     username: 'Karianne',
            //     email: 'Julianne.OConner@kory.org',
            // },
            // {
            //     id: 2,
            //     name: 'Chelsey Dietrich',
            //     username: 'Kamren',
            //     email: 'Lucio_Hettinger@annie.ca',
            // },
            // {
            //     id: 2,
            //     name: 'Leanne Graham',
            //     username: 'Bret',
            //     email: 'Sincere@april.biz',
            // },
            // {
            //     id: 2,
            //     name: 'Ervin Howell',
            //     username: 'Antonette',
            //     email: 'Shanna@melissa.tv',
            // },
            // {
            //     id: 2,
            //     name: 'Clementine Bauch',
            //     username: 'Samantha',
            //     email: 'Nathan@yesenia.net',
            // },
            // {
            //     id: 2,
            //     name: 'Patricia Lebsack',
            //     username: 'Karianne',
            //     email: 'Julianne.OConner@kory.org',
            // },
            // {
            //     id: 2,
            //     name: 'Chelsey Dietrich',
            //     username: 'Kamren',
            //     email: 'Lucio_Hettinger@annie.ca',
            // },
            // {
            //     id: 3,
            //     name: 'Leanne Graham',
            //     username: 'Bret',
            //     email: 'Sincere@april.biz',
            // },
            // {
            //     id:3,
            //     name: 'Ervin Howell',
            //     username: 'Antonette',
            //     email: 'Shanna@melissa.tv',
            // },
            // {
            //     id: 3,
            //     name: 'Clementine Bauch',
            //     username: 'Samantha',
            //     email: 'Nathan@yesenia.net',
            // },
            // {
            //     id: 3,
            //     name: 'Patricia Lebsack',
            //     username: 'Karianne',
            //     email: 'Julianne.OConner@kory.org',
            // },
            // {
            //     id: 3,
            //     name: 'Chelsey Dietrich',
            //     username: 'Kamren',
            //     email: 'Lucio_Hettinger@annie.ca',
            // },
            // {
            //     id: 3,
            //     name: 'Leanne Graham',
            //     username: 'Bret',
            //     email: 'Sincere@april.biz',
            // },
            // {
            //     id: 3,
            //     name: 'Ervin Howell',
            //     username: 'Antonette',
            //     email: 'Shanna@melissa.tv',
            // },
            // {
            //     id: 3,
            //     name: 'Clementine Bauch',
            //     username: 'Samantha',
            //     email: 'Nathan@yesenia.net',
            // },
            // {
            //     id: 3,
            //     name: 'Patricia Lebsack',
            //     username: 'Karianne',
            //     email: 'Julianne.OConner@kory.org',
            // },
            // {
            //     id: 3,
            //     name: 'Chelsey Dietrich',
            //     username: 'Kamren',
            //     email: 'Lucio_Hettinger@annie.ca',
            // },
        ],
    };
    tableData2 = {
        count: 81,
        currentPage: 2,
        data: [
            {
                id: 2,
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
                id:2,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 2,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 2,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 2,
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
                id: 2,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 2,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 2,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
        ],
    };
    tableData3 = {
        count: 81,
        currentPage: 3,
        data: [
            {
                id: 3,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id:3,
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
                id: 3,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 3,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 3,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 3,
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
                id: 3,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 3,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
        ],
    };

    source: LocalDataSource;

    constructor() {
        this.setTings(this.tableData1.count,this.tableData1.currentPage);
        this.source = new LocalDataSource(this.tableData1.data);
        // this.source = new LocalDataSource(this.data);


        // };

        // this.source = new LocalDataSource(this.tableData1.data);

    }
    serverChangePage(e) {
        // console.log(e);
        
        this.setTings(this.tableData1.count,e.pageInx);
        
        if (e.pageInx === 1) {
            this.source = new LocalDataSource(this.tableData1.data);
        } else if (e.pageInx === 2) {
            this.source = new LocalDataSource(this.tableData2.data);
        } else if (e.pageInx === 3) {
            this.source = new LocalDataSource(this.tableData3.data);
        }
    }
    btnClick() {
        this.tableData1.count += 100;
        
        this.setTings(this.tableData1.count,this.tableData1.currentPage)
    }

    
    
    setTings(count,currentPage) {
        this.settings = {
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
            serverPager: {
                is: true,
                count: count,
                perPage: 10,
                currentPage: currentPage,
            },
        }
    }
}
