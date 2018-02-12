![Build Status](https://travis-ci.org/akveo/ng2-first-table.svg?branch=master)

# Angular2 first Table 组件

### Demo

<a target="_blank" href="http://192.168.2.244:4200">查看演示</a>

![alt tag](src/assets/img/demo.gif)
### 已完成功能列表
- 设置奇偶行颜色
- 查询，排序
- 0807 单击，双击，复选框勾选
- 0810 更新 tool 工具栏 功能
- 0811 在单击/双击/复选框的基础上添加 一个 单击/双击/多选 共存案例
- 0811 单击是否启用多选，默认关闭
- 0815 更新自定义当前点击背景色
- 0821 更新工具栏汇总是否显示，其中包括小计，总计
- 0822 更新自定义表头颜色
- 0828 更新自定义工具栏-设置（包含自定义行高，选中行拖动，选中行查看明细）
- 0904 更新表格-自定义列设置（包含列格式化）
- 0905 更新表格-自定义列编辑
- 0929 更新表格-自定义列设置 （包含列隐藏）
- 0929 更新工具栏-表格列显示隐藏
- 1012 更新工具栏-自定义设置-开启/关闭 编辑（双击单元格编辑）
- 1012 更新默认配置 双击编辑（双击单元格编辑），在没有工具栏的情况下可用该配置
- 1012 逐页翻页
- 1030 更新多选方式 可以按ctrl+单击进行多选
- 1101 更新选中标记，可以在当前行显示一个图标，此显示是与被选中区分开的
- 1102 更新悬浮变色，前提条件是隔行换色是关闭状态
- 1114 更新(dblRow)事件，双击行可获取当前行的数据，不与各种选中行的事件冲突
- 1120 更新文档 columns（表头配置） 配置中的编辑行新增行呈现方式
- 1122 更新下拉框联动（新增/编辑）
- 1124 更新新增一列Actions2自定义列，并发射事件
- 1201 更新了服务端分页
<hr>

----------- 2018 ---------
- 0212 更新
  + (1)：删除原有工具栏新增/编辑/删除等事件！ 
  + (2)：如果开启工具栏(tooldata.isShow:true)，启用原有新增编辑删除事件：createConfirm(新增) editConfirm(编辑) deleteConfirm(删除)！
  + (3)：如果开启工具栏（原来新增编辑删除等事件不可开启，如 add.createConfirm: true）。
  + (4)：示例请点上方 例子 03-工具栏增删改案例。

### 未完成功能列表
- 拖动或设置改变列宽（可锁定列宽）
- 内嵌子表格  
- 内嵌tab表单
- 支持设置列所在位置，及排在第几列
- 支持将表格数据复制粘贴至Excel，也可以将Excel复制粘贴至表格
- 支持根据表格原始的结构导出为Excel
- 支持针对列进行行数、最大值、最小值、合计、平均值等汇总
- 支持针对表格行进行上一行下一行移动
- 拖动表格中的一列，可将其移动到某一列前或者后
- 支持表格中设置数据相同行的对应字段合并
- 表格设置按字段分组，并且能够按分布后的数据进行汇总，具体汇总方式请参考汇总
- 支持表格类似于树形控件模式显示
- 给一列数据设置格式
- 支持在某列单元格中支持配置复杂界面的功能
- 支持将列头两列合并为一列，两行列头合并为一行
- 支持双列头
- 支持针对表格当前页数据进行全选

## 安装

该库可用作npm软件包，因此您只需运行以下命令即可：（如果不是新手，建议先装淘宝镜像端，因为cnpm更快）

```
npm install --save ng2-first-table
```

该命令将在您的`package.json`文件中创建一个记录，并将该包安装到npm modules文件夹中。

## 最简单的设置示例

首先需要将ng2-first-table指令导入到组件中。

```

import { Ng2FirstTableModule } from 'ng2-first-table';

```

然后通过添加到您的模块的指令列表来注册它：

```
// ...

@NgModule({
  imports: [
    // ...
    
    Ng2FirstTableModule,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...
```

现在，我们需要配置表并将其添加到模板中。 组件开始工作的唯一必需设置是列配置。 我们在组件中注册设置属性，我们想要具有表并配置一些列[设置文档](http://192.168.2.244:4200/#/documentation)：
    
```
settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
};
```

最后，我们将ng2-first-table组件放在模板中：

```
// ...

@Component({
  template: `
    <ng2-first-table [settings]="settings"></ng2-first-table>
  `
})
// ...
```
在此步骤中，您将拥有一个最小配置的表。 默认情况下，所有功能都可用，您无需配置它们，因此现在您可以添加/编辑/删除行，对表进行排序或过滤。
 
仍然似乎缺少一些东西...对，默认情况下，表中没有数据。 要添加一些，我们创建一个数组属性与组件中的对象列表。 请注意，对象键与列配置中的相同。

```
data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  
  // ... list of items
  
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];
```

And pass the data to the table:

```
// ...

@Component({
  template: `
    <ng2-first-table [settings]="settings" [source]="data"></ng2-first-table>
  `
})
// ...
```

现在你有一些数据在表中。
 
## 进一步的文档
安装，定制等有用的文档: https://ascode.github.io/ng2-first-table/

## How can I support developers?

- 可以关注我们的：[Github](https://github.com/wangraoji/ng2-first-table)
- 创建拉请求，提交错误，建议新功能


## 功能特征（详情请看本项目文档）
* 本地数据源（Server / API DataSource正在进行中）
* 首行过滤
* 當前頁排序
* 客戶端分页
* 单元行 单击/双击/复选框勾选 事件
* 隔行换色/自定义点击背景色
* 工具栏
* 汇总

## 感谢我们的贡献者！ 
[<img alt="nnixaa" src="https://avatars0.githubusercontent.com/u/2718661?v=4&s=400" width="60">](https://github.com/ascode)    [<img alt="nnixaa" src="https://avatars3.githubusercontent.com/u/24467663?v=4&s=400" width="60">](https://github.com/wangraoji)



## 参考文件
[Angular 4 ElementRef](https://segmentfault.com/a/1190000008653690)