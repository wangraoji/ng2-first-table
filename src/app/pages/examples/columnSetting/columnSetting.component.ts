import { Component } from '@angular/core';

@Component({
  templateUrl: './columnSetting.component.html',
  styleUrls: ['./columnSetting.component.scss'],
})
export class ColumnSettingComponent {
  lf: string = `{`;
  rf: string = `}`;
  icon: string = `<i class='icon'></i>`;
  icon1: string = `<i class='icon1'></i>`;
}
