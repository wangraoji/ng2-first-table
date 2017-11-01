import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'select-editor',
  template: `
  <ng-container *ngIf="cell.row.isCellMerge">
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
  <ng-container *ngIf="!cell.row.isCellMerge">
    <select [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getId()"
      [disabled]="!cell.isEditable()"
      (click)="onClick.emit($event)"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()">
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
}
