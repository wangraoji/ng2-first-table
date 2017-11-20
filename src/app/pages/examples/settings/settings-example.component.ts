import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'settings-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"></ng2-first-table>
  `,
})

export class SettingsExampleComponent {
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
    settings = {
        // 自定义工具栏
        toolData: {
            isShow: true,
            
            // 自定义行设置
            columnRowSetting: {
                // 设置是否显示
                isShow: true,
                // 设置行高
                setTrHieht: {
                    isShow: true,
                    setTrHiehtContent: '设置行高',
                },
                // 允许行拖动
                setTrMove: {
                    isShow: true,
                    setTrMoveContent: '开启行拖动',
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

        },
        columns: {
            id: {
                title: 'ID',
                editor: {
                    type: 'completer',
                    config: {
                      completer: {
                        data: this.data,
                        searchFields: 'id',
                        titleField: 'id',
                        descriptionField: 'email',
                      },
                    },
                }
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

   
    // settings = {

    //     columns: {
    //         id: {
    //             title: 'ID',
    //         },
    //         name: {
    //             title: 'Full Name',
    //             editor: {
    //                 type: 'completer',
    //                 config: {
    //                   completer: {
    //                     data: this.data,
    //                     searchFields: 'name',
    //                     titleField: 'name',
    //                     descriptionField: 'email',
    //                   },
    //                 },
    //             }
    //         },
    //         username: {
    //             title: 'User Name',
    //             type: 'html',
    //             editor: {
    //               type: 'list',
    //               config: {
    //                 list: [
    //                     { value: '10', title: '10' }, 
    //                     { value: '20', title: '20' }, 
    //                     { value: '30',title: '30',}
    //                 ],
    //               },
    //             },
    //           },
    //         email: {
    //             title: 'Email',
    //         },
    //     },
    // };

    // data = [
    //     {   
    //         id: 1,
    //         name: '10',
    //         username: '10',
    //         email: 'Sincere@april.biz',
    //     },
    //     {    
    //         id: 2,
    //         name: '20',
    //         username: '20',
    //         email: 'Shanna@melissa.tv',
    //     },
    //     {
    //         id: 3,
    //         name: '30',
    //         username: '30',
    //         email: 'Nathan@yesenia.net',
    //     },
    //     {
    //         id: 4,
    //         name: '40',
    //         username: '40',
    //         email: 'Julianne.OConner@kory.org',
    //     },
    //     {
    //         id: 5,
    //         name: '50',
    //         username: '50',
    //         email: 'Lucio_Hettinger@annie.ca',
    //     },
    // ];
    // data = [
    //     {
    //         id: 1,
    //         name: 'Leanne Graham',
    //         username: 'Bret',
    //         email: 'Sincere@april.biz',
    //         comments: 'Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.',
    //         passed: 'Yes',
    //     },
    //     {
    //         id: 2,
    //         name: 'Ervin Howell',
    //         username: 'Antonette',
    //         email: 'Shanna@melissa.tv',
    //         comments: `Vix iudico graecis in? Malis eirmod consectetuer duo ut?
    //                 Mel an aeterno vivendum accusata, qui ne amet stet definitiones.`,
    //         passed: 'Yes',
    //     },
    //     {
    //         id: 3,
    //         name: 'Clementine Bauch',
    //         username: 'Samantha',
    //         email: 'Nathan@yesenia.net',
    //         comments: 'Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.',
    //         passed: 'No',
    //     },
    //     {
    //         id: 4,
    //         name: 'Patricia Lebsack',
    //         username: 'Karianne',
    //         email: 'Julianne.OConner@kory.org',
    //         comments: 'Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?',
    //         passed: 'Yes',
    //     },
    //     {
    //         id: 5,
    //         name: 'Chelsey Dietrich',
    //         username: 'Kamren',
    //         email: 'Lucio_Hettinger@annie.ca',
    //         comments: `Quo viris appellantur an, pro id eirmod oblique iuvaret,
    //                 timeam omittam comprehensam ad eam? Eos id dico gubergren,
    //                 cum dicant qualisque ea, id vim ferri moderatius?`,
    //         passed: 'No',
    //     },
    //     {
    //         id: 6,
    //         name: 'Mrs. Dennis Schulist',
    //         username: 'Leopoldo_Corkery',
    //         email: 'Karley_Dach@jasper.info',
    //         comments: 'Audire appareat sententiae qui no. Sed no rebum vitae quidam.',
    //         passed: 'No',
    //     },
    //     {
    //         id: 7,
    //         name: 'Kurtis Weissnat',
    //         username: 'Elwyn.Skiles',
    //         email: 'Telly.Hoeger@billy.biz',
    //         comments: `Mel dicat sanctus accusata ut! Eu sit choro vituperata,
    //                 qui cu quod gubergren elaboraret, mollis vulputate ex cum!`,
    //         passed: 'Yes',
    //     },
    //     {
    //         id: 8,
    //         name: 'Nicholas Runolfsdottir V',
    //         username: 'Maxime_Nienow',
    //         email: 'Sherwood@rosamond.me',
    //         comments: 'Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.',
    //         passed: 'No',
    //     },
    //     {
    //         id: 9,
    //         name: 'Glenna Reichert',
    //         username: 'Delphine',
    //         email: 'Chaim_McDermott@dana.io',
    //         comments: 'In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.',
    //         passed: 'No',
    //     },
    //     {
    //         id: 10,
    //         name: 'Clementina DuBuque',
    //         username: 'Moriah.Stanton',
    //         email: 'Rey.Padberg@karina.biz',
    //         comments: `Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.
    //                  Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?`,
    //         passed: 'Yes',
    //     },
    //     {
    //         id: 11,
    //         name: 'Nicholas DuBuque',
    //         username: 'Nicholas.Stanton',
    //         email: 'Rey.Padberg@rosamond.biz',
    //         comments: 'Lorem ipsum dolor sit amet, mea dolorum detraxit ea?',
    //         passed: 'No',
    //     },
    // ];

    // settings = {
    //     danjiIsMultion: false,

    //     // 自定义工具栏
    //     toolData: {
    //         isShow: true,
    //         // 自定义行设置
    //         columnRowSetting: {
    //             // 设置是否显示
    //             isShow: true,
    //             // 设置行高
    //             setTrHieht: {
    //                 isShow: true,
    //                 setTrHiehtContent: '设置行高',
    //             },
    //             // 允许行拖动
    //             setTrMove: {
    //                 isShow: true,
    //                 setTrMoveContent: '开启行拖动',
    //             },
    //             // 查看明细
    //             details: {
    //                 isShow: true,
    //                 detailsContent: '查看明细',
    //             },
    //             // 双击编辑
    //             editCell: {
    //                 isShow: true,
    //                 editCellContent: '开启编辑'
    //             }
    //         },

    //     },
    //     columns: {
    //         id: {
    //             title: 'ID',
    //             width: '400px',
    //         },
    //         name: {
    //             title: 'Full Name',
    //             editor: {
    //                 type: 'completer',
    //                 config: {
    //                     completer: {
    //                         data: this.data,
    //                         searchFields: 'name',
    //                         titleField: 'name',
    //                         descriptionField: 'email',
    //                     },
    //                 },
    //             },
    //         },
    //         username: {
    //             title: 'User Name',
    //             type: 'html',
    //             editor: {
    //                 type: 'list',
    //                 config: {
    //                     list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
    //                         value: '<b>Samantha</b>',
    //                         title: 'Samantha',
    //                     }],
    //                 },
    //             },
    //         },
    //         email: {
    //             title: 'Email',
    //             type: 'string',
    //         },
    //         comments: {
    //             title: 'Comments',
    //             editor: {
    //                 type: 'textarea',
    //             },
    //         },
    //         passed: {
    //             title: 'Passed',
    //             editor: {
    //                 type: 'checkbox',
    //                 config: {
    //                     true: 'Yes',
    //                     false: 'No',
    //                 },
    //             },

    //         },
    //     },
    // };



    source: LocalDataSource;

    constructor() {
        this.source = new LocalDataSource(this.data);
    }

}
