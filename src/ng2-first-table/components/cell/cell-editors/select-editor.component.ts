import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'select-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
  
    <ng-container *ngIf="cellMerge">
      <select [ngClass]="inputClass"
        class="form-control"
        [(ngModel)]="cell.newValue.text"
        [name]="cell.getId()"
        [disabled]="!cell.isEditable()"
        (click)="onClick.emit($event)"
        (keydown.enter)="onEdited.emit($event)"
        (keydown.esc)="onStopEditing.emit()">
          <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue().text">{{ option.title }}
          </option>
      </select>
    </ng-container>
    <ng-container *ngIf="!cellMerge">
      <select [ngClass]="inputClass"
        class="form-control"
        [(ngModel)]="cell.newValue"
        [name]="cell.getId()"
        [disabled]="!cell.isEditable()"
        (click)="onClick.emit($event)"
        (keydown.enter)="onEdited.emit($event)"
        (keydown.esc)="onStopEditing.emit()"
        (change)="onChange(cell)">
          <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
          </option>
      </select>
    </ng-container>
    
    `,
})
export class SelectEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }

  onChange(e) {
    let t = this.selectLinkageData;
    if (t.open) {
      let column = e.column.id;
      if (column === t.startStr) {
        t.starData.forEach((el: any, inx: any) => {
          if(e.newValue === el){
            this.getColumn(t.targetStr,t.targetData[inx])
          }
        });
      }
    }
  }

  getColumn(targetStr, tableArr) {
    this.setColumns.forEach(el => {
      if (el.id === targetStr) {
        el.settings.editor.config.list = tableArr;
      }
    });
  }
}
