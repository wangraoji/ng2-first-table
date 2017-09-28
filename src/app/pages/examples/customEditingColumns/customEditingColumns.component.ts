import { Component } from '@angular/core';

@Component({
  templateUrl: './customEditingColumns.component.html',
  styleUrls: ['./customEditingColumns.component.scss'],
})
export class CustomEditingColumnsComponent {
  lf: string = `{`;
  rf: string = `}`;
  icon: string = `<i class='icon'></i>`;
  icon1: string = `<i class='icon1'></i>`;
}
