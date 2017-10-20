import { Component } from '@angular/core';

@Component({
  templateUrl: './formattingCol.component.html',
  styleUrls: ['./formattingCol.component.scss'],
})
export class FormattingColComponent {
  lf: string = `{`;
  rf: string = `}`;

  isEdit: boolean = true;
  onEditFn(){
    this.isEdit = !this.isEdit;

  }
}
