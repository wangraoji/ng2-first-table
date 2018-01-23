import { Component, OnInit } from '@angular/core';


import { PermissionsService } from './permissionsService';

import { log } from 'util';
@Component({
  selector: 'demo',
  styleUrls: ['./documentation.component.scss'],
  templateUrl: './documentation.component.html',
})
export class DocumentationComponent {
  left: string = '{';
  right: string = '}';

  password: string;
  warning: string;


  isTrue: boolean;

  

  // 01-下拉框实现思路
  SelectLinkage: any;
  
  // 是否发布
  isprod: boolean;
  constructor(protected srv: PermissionsService) {
  }

  datas: any;


  ngOnInit() {
  }

  onSubmit() {
    this.srv.getPermissions(this.password).then((res) => {
      this.isTrue = res.isTrue;
      if (this.isTrue) {
        this.datas = res.datas;
      } else {
        this.warning = `密码错误/忘记密码？，请联系 微信/QQ：2152860`;
      }
    });
  }

  onOutput(event) {
    if (event.target.value === "") {
      this.warning = "";
    }
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

}
