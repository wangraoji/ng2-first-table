import { Component , ElementRef } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import * as _ from 'lodash';

@Component({
    selector: 'tool-example2-table',
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

export class ToolExample2Component {
    settings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        selectMode: 'single',
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
        // 自定义工具栏
        toolData: {
            isShow: true,   // 工具栏是否显示
            toolAdd: {
                isShow: true,    // 新增按钮是否显示
                liClass: '',     // 新增按妞类名
                toolAddContent: '新增',    // 新增按钮文本，如要图标显示可 <i class="icon"></i>
                confirmAdd: true,          // 新怎按钮是否启用 （事件调用方法请移步文档） 
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
        },
    };
    source: LocalDataSource;

    // 复选框勾选的数据 
    selectedData = [];

    // 从服务器获取的数据
    deleteData = [];
    
    constructor(private http: Http, private el: ElementRef) {
        this.http.get('assets/toolData/toolData.json')
            .subscribe((res: Response) => {
                this.deleteData = res.json().toolData;
                this.source = new LocalDataSource(res.json().toolData);
            });
    }

    rouSelect(event) {
        this.selectedData = event.selected;
        
        // 选中的条数如果大于1条，则编辑事件禁用，并添加样式。
        if ( this.selectedData.length > 1) {
            this.el.nativeElement.querySelector('.edit').className  = 'edit editDisale';
        }else {
            this.el.nativeElement.querySelector('.edit').className  = 'edit';
        }
    
    }

    // 删除事件
    onToolDelete(event) {
        // 1. 遍历勾选框勾选的数据
        this.selectedData.forEach(el => {
            // 2. 遍历从服务器获取的数据
            this.deleteData.forEach(el1 => {
                // 3. 因为是数组对象，所以需要把每个对象转成字符串进行比较。
                if (JSON.stringify(el) === JSON.stringify(el1)) {
                    // 4. 如果勾选的数据和服务器的数据里有相等的，就把这条想等的从服务器数据数组里删除
                    this.deleteData.splice(el1, 1);
                }
            });
        });
        // 5. 然后在把剩下的数据放到source里面。
        this.source = new LocalDataSource(this.deleteData);

        // 删除之后让编辑按钮重新可用
        this.el.nativeElement.querySelector('.edit').className  = 'edit';

        // 注：真实的存储过程 删除是在这里写逻辑，上面只是演示。

        // ...处理业务逻辑
    }

    // 编辑事件
    onToolEdit(event) {
        // 1. 如果复选框勾选的数量大于1条，那么不执行该事件。（因为我们的业务需求是点编辑只需要取到当前
        //    对象，因为进行跳转发送。）
        // 2. 如果只有1条，那么就取到当前勾选的数据了，然后处理逻辑！
        if (this.selectedData.length > 1) {
            console.info(`勾选过多`);
            return false;
        } else {
            console.info(this.selectedData[0]);
            // 处理逻辑
        }
    }

    // 新增事件
    onToolAdd(event) {
        console.info('新增事件');
        // 处理逻辑
    }
}
