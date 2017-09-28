export const peizhiDatas: any = [
    {
        shuxing: `mode`,
        type: `'inline' | 'external'`,
        default: `'inline'`,
        description: `内联和外联（超链接）`,
    },
    {
        shuxing: `selectMode<span class="gengxin">（0811更新）</span>`,
        type: `'string'`,
        default: `'single' | 'multi' | 'dblclick' | 'allEvent'`,
        description: ` 
        1：single 第1列没有复选框，可使用 （userRowSelect）选中行单击事件。<br/> 
        2：dblclick 第1列没有复选框，可使用 （dbSelect）选中行双击事件事件。<br/> 
        3：multi 第1列有复选框，1 2 不可使用， 可使用 (rowSelect) 复选框选中事件。<br/> 
        4：allEvent 第1列没有复选框，1 2 可使用，3不可使用。单击/双击/多选 并存。
        ` ,
    },
    {
        shuxing: `danjiIsMultion<span class="gengxin">（0811更新）</span>`,
        type: `布尔值`,
        default: `false`,
        description: `单击是否多选，默认不可false`,
    },
    {
        shuxing: `hideHeader`,
        type: `布尔值`,
        default: `false`,
        description: `隐藏标题(表头)`,
    },
    {
        shuxing: `hideSubHeader`,
        type: `布尔值`,
        default: `false`,
        description: `隐藏第二行(搜索的)`,
    },
    {
        shuxing: `noDataMessage`,
        type: `string`,
        default: `'No data found'`,
        description: `数据没加载时显示的内容`,
    },
    {
        shuxing: `customizeColumn<span class="gengxin">（0905更新）</span>`,
        type: `布尔值`,
        default: `false`,
        description: `是否开启自定列编辑`,
    },
    // clickBgc 对象
    { teshu: `clickBgc 对象 --自定义当前点击背景色` },
    {
        shuxing: `clickBgc<span class="gengxin">（0815更新）</span>`,
        type: `object`,
        default: `默认`,
        description: `自定义当前点击背景色`,
    },
    {
        shuxing: `clickBgc.isShow`,
        type: `布尔值`,
        default: `false`,
        description: `是否开启自定义当前点击背景色`,
    },
    {
        shuxing: `clickBgc.bgc`,
        type: `string`,
        default: `'red'`,
        description: `自定义当前点击背景色颜色`,
    },
    // theadBgc 对象
    { teshu: `theadBgc 对象 --自定义当前表头背景色` },
    {
        shuxing: `theadBgc<span class="gengxin">（0822更新）</span>`,
        type: `object`,
        default: `默认`,
        description: `自定义当前表头背景色`,
    },
    {
        shuxing: `theadBgc.isShow`,
        type: `布尔值`,
        default: `false`,
        description: `是否开启自定义表头背景色`,
    },
    {
        shuxing: `theadBgc.bgc`,
        type: `string`,
        default: `'#ccc'`,
        description: `自定义表头背景颜色`,
    },
    // attr 对象
    { teshu: `attr 对象` },
    {
        shuxing: `attr`,
        type: `objerc`,
        default: `默认`,
        description: `设置 table 属性的`,
    },
    {
        shuxing: `attr.id`,
        type: `string`,
        default: `''`,
        description: `设置 table ID`,
    },
    {
        shuxing: `attr.class`,
        type: `string`,
        default: `''`,
        description: `设置 table class类名`,
    },
    // pager 对象
    { teshu: `pager 对象` },
    {
        shuxing: `pager`,
        type: `objerc`,
        default: `默认`,
        description: `设置分页`,
    },
    {
        shuxing: `
            1. pager.display <br/>
            2. pager.perPage <br/>
        `,
        type: `
            1. boolean<br/>
            2. number<br/>
        `,
        default: `
            1. true<br/>
            2. 10<br/>
        `,
        description: `
            1. 分页是否显示<br/>
            2. 每页默认10条<br/>
        `,
    },
    // actions 对象
    { teshu: `actions 对象` },
    {
        shuxing: `<strong>actions</strong>`,
        type: `<b>objerc</b>`,
        default: `<b>默认</b>`,
        description: `<b>设置 actions 列（当add/edit/delete 都为false时，隐藏该列）</b>`,
    },
    {
        shuxing: `
            1. actions.columnTitle <br/>
            2. actions.add<br/>
            3. actions.edit<br/>
            4. actions.delete<br/>
            5. actions.position<br/>
        `,
        type: `
            1. string <br/>
            2. boolean <br/>
            3. boolean <br/>
            4. boolean <br/>
            5. string <br/>
        `,
        default: `
            1. 'Actions' <br/>
            2. true <br/>
            3. true <br/>
            4. true <br/>
            5. 'left' | 'right' <br/>
        `,
        description: `
            1. 设置 actions 列名 <br/>
            2. 这列的 add添加 是否显示 <br/>
            3. 这列的 edit编辑 是否显示 <br/>
            4. 这列的 delete删除 是否显示 <br/>
            5. 这列的位置在 左 | 右 <br/>
        `,
    },
    // filter 对象
    { teshu: `filter 对象` },
    {
        shuxing: `filter`,
        type: `objerc`,
        default: `默认`,
        description: `设置 过滤器 行（搜索）`,
    },
    {
        shuxing: `filter.inputClass`,
        type: `string`,
        default: `默认`,
        description: `设置 过滤器 input的 类名`,
    },
    // Add 对象
    { teshu: `Add 对象` },
    {
        shuxing: `Add`,
        type: `objerc`,
        default: `默认`,
        description: `设置 Add 添加`,
    },
    {
        shuxing: `
            1. add.inputClass<br/>
            2. add.addButtonContent<br/>
            3. add.createButtonContent<br/>
            4. add.Cancel<br/>
            5. add.confirmCreate<br/>
        `,
        type: `
            1. string<br/>
            2. string<br/>
            3. string<br/>
            4. string<br/>
            5. boolean<br/>
        `,
        default: `
            1. 默认<br/>
            2. 'Add New'<br/>
            3. 'Create'<br/>
            4. 'Cancel'<br/>
            5. false<br/>
        `,
        description: `
            1. 暂时没发现用处（08/02）<br/>
            2. 添加按钮名称，可以任意定义，如需改图标 <strong> &lt;i class='xxx'&gt;&lt;/i&gt;</strong> <br/>
            3. 点击添加按钮后，确认按钮名称<br/>
            4. 点击添加按钮后，取消按钮名称<br/>
            5. 点击添加按钮是否触发的事件<br/>
        `,
    },

    {
        shuxing: ``,
        type: ``,
        default: ``,
        description: ``,
    },
    {
        shuxing: ``,
        type: ``,
        default: ``,
        description: ``,
    },
    {
        shuxing: ``,
        type: ``,
        default: ``,
        description: ``,
    },
    {
        shuxing: ``,
        type: ``,
        default: ``,
        description: ``,
    },
    {
        shuxing: ``,
        type: ``,
        default: ``,
        description: ``,
    },
    {
        shuxing: ``,
        type: ``,
        default: ``,
        description: ``,
    },
    {
        shuxing: ``,
        type: ``,
        default: ``,
        description: ``,
    },
    { teshu: `` },
];

