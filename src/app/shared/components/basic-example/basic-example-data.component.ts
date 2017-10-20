import { Component } from '@angular/core';
import { IndexService } from '../../../pages/index.service';

@Component({
  selector: 'basic-example-data',
  template: `
    <ng2-first-table [settings]="settings" [source]="data" 
    (toolAdd)="toolAddFn()" 
    (toolEdit)="toolEditFn()"
    (toolDelete)="toolDeleteFn()"
    (userRowSelect)="userRowSelect($event)"
    (dbSelect)="dblclick($event)">
    </ng2-first-table>
  `,
  providers: [IndexService],
})

export class BasicExampleDataComponent {

  athis;

  // 判断是不是单击
  isClick: boolean;

  constructor(private indexService: IndexService) {
    this.athis = this;
  }

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
    rowcolor: {
      alternate: true,
      normalcolor: '#00aa00',
      alternatecolor: '#aa0000',
    },
    toolsline: [
      {
        icon: '',
        text: '删除',
        operate: () => {
          console.log("delete");
        },
      },
    ],
    // 自定义工具栏
    toolData: {
      isShow: true,
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
        liClass: '',
        toolEditContent: '编辑',
        confirmEdit: true,
      },
      exportExcel: {
        isShow: false,
        liClass: '',
        exportExcelContent: '导出Excel',
      },
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
        // 双击编辑
        editCell: {
          isShow: true,
          editCellContent: '开启编辑'
        }
      },
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
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 88,
      name: 'Wangraoji',
      username: '邪七',
      email: '2152860@qq.com',
    },
  ];

  toolAddFn() {
    let r = confirm(`新增事件`);
    if (r) {
      alert(`点了确定`);
    } else {
      alert(`点了取消`);
    }
  }

  toolEditFn() {
    let r = confirm(`编辑事件`);
    if (r) {
      alert(`点了确定`);
    } else {
      alert(`点了取消`);
    }
  }

  toolDeleteFn() {
    let r = confirm(`删除事件`);
    if (r) {
      alert(`点了确定`);
    } else {
      alert(`点了取消`);
    }
  }

  // 单击事件方法 方法名自定义
  userRowSelect(event): void {
    this.isClick = false;
    setTimeout(() => {
      if (this.isClick) {
        return;
      }

      if(event.isSelected){
        let r = confirm(`单击事件`);
        if (r) {
          alert(`点了确定，请看控制台输出`);
          console.info(event);
        } else {
          alert(`点了取消`);
        }
      }
    }, 500);
  }


  // 双击事件方法 方法名自定义
  dblclick(event): void {
    this.isClick = true;
    let r = confirm(`双击事件`);
    if (r) {
      alert(`点了确定，请看控制台输出`);
      console.info(event);
    } else {
      alert(`点了取消`);
    }
  }
}
