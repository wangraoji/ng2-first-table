import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'laofanV-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"></ng2-first-table>
  `,
})

export class LaofanVExampleComponent {
    data = [
        {
            stuName: {
                text: "匿名1号",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban1: {
                text: "冬天不冷",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban2: {
                text: "北海一本道人1",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban3: {
                text: "初遇加勒比",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            like: {
                text: "false",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            ganxiang: {
                text: "不错",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            }
        },

        {
            stuName: {
                text: "匿名2号",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban1: {
                text: "冬天不冷",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban2: {
                text: "北海一本道人3",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban3: {
                text: "再遇加勒比",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            like: {
                text: "true",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            ganxiang: {
                text: "真不错",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            }
        },

        {
            stuName: {
                text: "匿名3号",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban1: {
                text: "冬天特不冷",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban2: {
                text: "北海一本道人1",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            chuban3: {
                text: "再遇加勒比",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            like: {
                text: "true",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            },
            ganxiang: {
                text: "特不错",
                colspan: "",
                rowspan: 1,
                textAlign: "",
            }
        },
        // {
        //     stuName: {
        //         text: "匿名4号",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     chuban1: {
        //         text: "冬天不冷",
        //         colspan: "",
        //         rowspan: 2,
        //         textAlign: "",
        //     },
        //     chuban2: {
        //         text: "北海一本道人2",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     chuban3: {
        //         text: "又遇加勒比",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     like: {
        //         text: "true",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     ganxiang: {
        //         text: "挺不错",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     }
        // },
        // {
        //     stuName: {
        //         text: "匿名5号",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     chuban1: {
        //         text: null,
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     chuban2: {
        //         text: "北海一本道人2",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     chuban3: {
        //         text: "又遇加勒比",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     like: {
        //         text: "true",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     },
        //     ganxiang: {
        //         text: "还不错",
        //         colspan: "",
        //         rowspan: 1,
        //         textAlign: "",
        //     }
        // },
    ]
    settings = {
        selectMode: 'xxxx',

        dblClickEdit: true,

        // 开启合并
        isCellMerge: true,

        // hideSubHeader: true,

        // 自定义工具栏
        actions: {
            add: false,
            edit: false,
            delete: false,
        },

        columns: {
            stuName: {
                title: "匿名用户",
            },
            chuban1: {
                title: "作者---冬天",
                type: 'html',
                editor: {
                    type: 'list',
                    config: {
                        list: [
                            { value: '冬天不冷', title: '冬天不冷' },
                            { value: '冬天特不冷', title: '冬天特不冷' },
                            { value: '冬天真不冷', title: '冬天真不冷', }
                        ],
                    },
                },
            },
            chuban2: {
                title: "作者---出国游",
            },
            chuban3: {
                title: "作者---索马里",
            },
            like: {
                title: "喜欢 or 不喜欢",
                editor: {
                    type: 'checkbox',
                    config: {
                        true: 'true',
                        false: 'false',
                    },
                }
            },
            ganxiang: {
                title: "感想",
                editor: {
                    type: 'textarea',
                },
            }
        }
    };

    //    []
    /*
        data = [
            {
                name:'zs',
                age: 18,
                rowspan: '',
            },
            {
                name:'ls',
                age: 18,
                rowspan: '',
            },
        ]

        ---------------------------------------

        data = [
            {
                name:'zs',
                age: 18,
                rowspan: '2',
            },
            {
                name:'ls',
                age: "",
                rowspan: '',
            },
        ]
            
    */
    // data = [
    // columns: {
    //     id: {
    //         title: 'ID',
    //         width:"10%",
    //     },
    //     name: {
    //         title: 'Full Name',

    //     },
    // username: {
    //     title: 'User Name',
    // },
    // username: {
    //     title: 'User Name',
    //     type: 'html',
    //     editor: {
    //       type: 'list',
    //       config: {
    //         list: [
    //             { value: '10', title: '10' }, 
    //             { value: '20', title: '20' }, 
    //             { value: '30',title: '30',}
    //         ],
    //       },
    //     },
    //   },
    //     email: {
    //         title: 'Email',
    //     },
    // },
    //     {
    //         id: {
    //             text: "1",
    //             colspan: "",
    //             rowspan: "3",
    //             textAlign:"",
    //         },
    //         name: {
    //             text: "10",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         username: {
    //             text: "10",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         email: {
    //             text: "Sincere@april.biz",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //     },
    //     {
    //         id: {
    //             text: "",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         name: {
    //             text: "20",
    //             colspan: "2",
    //             rowspan: "", 
    //             textAlign:"center",
    //         },
    //         username: {
    //             text: "",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         email: {
    //             text: "Shanna@melissa.tv",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //     },
    //     {
    //         id: {
    //             text: "",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         name: {
    //             text: "30",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         username: {
    //             text: "30",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         email: {
    //             text: "Lucio_Hettinger@annie.ca",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //     },
    //     {
    //         id: {
    //             text: "4",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         name: {
    //             text: '40',
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         username: {
    //             text: '40',
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         email: {
    //             text: 'Julianne.OConner@kory.org',
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //     },
    //     {
    //         id: {
    //             text: "5",
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         name: {
    //             text: '50',
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //         username: {
    //             text: '50',
    //             colspan: "2",
    //             rowspan: "",
    //             textAlign:"center",
    //         },
    //         email: {
    //             text: '',
    //             colspan: "",
    //             rowspan: "",
    //             textAlign:"",
    //         },
    //     },
    // ];

    source: LocalDataSource;

    constructor() {
        this.source = new LocalDataSource(this.data, this.settings);
    }

    ngOnInit() {


        // let a1 = [
        //     { id: 1, value: '1', rowspan: 1 },
        //     { id: 2, value: '2', rowspan: 1 },
        //     { id: 3, value: '2', rowspan: 1 },
        //     { id: 4, value: '1', rowspan: 1 },
        //     { id: 5, value: '2', rowspan: 1 },
        //     { id: 6, value: '2', rowspan: 1 },
        //     { id: 7, value: '2', rowspan: 1 },
        // ];

        /*
            { id: 1, value: '1', rowspan: 1 },
            { id: 2, value: '', rowspan: 1 },
            { id: 3, value: '2', rowspan: 2 },
            { id: 4, value: '1', rowspan: 1 },
            { id: 5, value: '', rowspan: 1 },
            { id: 6, value: '', rowspan: 1 },
            { id: 7, value: '2', rowspan: 3 },
            
        */
        // let a2 = a1.reverse();
        // for (let i = 0; i < a2.length; i++) {
        //     if (a2[i + 1]) {
        //         if (a2[i].value == a2[i + 1].value) {
        //             a2[i].value = '';
        //             a2[i + 1].rowspan += a2[i].rowspan;
        //             a2[i].rowspan = 1;

        //         }
        //     }
        // }
        // console.info(a2.reverse());
        // 

        // let xx = [1, 2, 3, 4, 5];
        // console.info(a2.reverse());
        // for (let i = a2.length; i >= 0; i--) {

        //     if (a2[i - 1]) {
        //         if (a2[i].value == a2[i - 1].value) {
        //             // num = a2[i + 1].value;
        //             a2[i].value = '';
        //             a2[i + 1].rowspan += a2[i].rowspan;
        //             a2[i].rowspan = 1;

        //         }

        //     }
        // }
        // console.info(num);
        // console.info(a2);

        // console.info(jilu);
    }
}
