import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'checkbox-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
      <ng-container *ngIf="cellMerge">
        <input [ngClass]="inputClass"
          type="checkbox"
          class="form-control"
          [name]="cell.getId()"
          [disabled]="!cell.isEditable()"
          [checked]="cell.getValue().text == (this.cell.getColumn().getConfig()?.true || true)"
          (click)="onClick.emit($event)"
          (change)="onChanges($event)"
          (keyup.enter)="onEdited.emit($event)">
      </ng-container>
      <ng-container *ngIf="!cellMerge">
        <input [ngClass]="inputClass"
          type="checkbox"
          class="form-control"
          [name]="cell.getId()"
          [disabled]="!cell.isEditable()"
          [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
          (click)="onClick.emit($event)"
          (change)="onChanges($event)"
          (keyup.enter)="onEdited.emit($event)">
      </ng-container>
    `,
})
export class CheckboxEditorComponent extends DefaultEditor {

  constructor() {
    super();
    
  }

  // onEdited.emit($event)
  // onEdit(event) {
  //   console.log(event);
    
  //   this.onEdited.emit(event)
  // }
  onChanges(event: any) {
    const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
    const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
    if(this.cellMerge){
      this.cell.newValue.text = event.target.checked ? trueVal : falseVal;
    }else {
      this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
  }
}
