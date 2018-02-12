import { Component, ElementRef } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
    selector: 'tool-example1-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"
      (createConfirm)="createConfirm($event)"
      (editConfirm)="editConfirm($event)"
      (deleteConfirm)="deleteConfirm($event)"></ng2-first-table>
    `,
})

export class ToolExample1Component {
    // 
    settings = {
        // selectMode: "multi",
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
            // toolAdd: {
            //     isShow: true,    // 新增按钮是否显示
            //     liClass: '',     // 新增按妞类名
            //     toolAddContent: '新增',    // 新增按钮文本，如要图标显示可 <i class="icon"></i>
            //     confirmAdd: true,          // 新怎按钮是否启用 （事件调用方法请移步文档） 
            // },
            // toolDelete: {
            //     isShow: true,
            //     liClass: '',
            //     toolDeleteContent: '删除',
            //     confirmDelete: true,
            // },
            // toolEdit: {
            //     isShow: true,
            //     liClass: 'edit',
            //     toolEditContent: '编辑',
            //     confirmEdit: true,
            // },
            // toolSave: {
            //     isShow: true,
            //     liClass: 'save',
            //     toolSaveContent: '保存',
            //     confirmSave: true,
            // },
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




    // 新增
    createConfirm(e){
        console.log(`新增`);
        if(e.newData.id === ""){
            window.confirm(`ID不允许为空`);
            return false;
        }
        e.confirm.resolve(e.newData);
    }
    
    // 编辑
    editConfirm(e) {
        console.log(`编辑`);
        e.confirm.resolve(e.newData);
    }

    // 删除
    deleteConfirm(e){
        console.log(`删除`);
        e.confirm.resolve();
    }
}
