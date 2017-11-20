import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'textarea-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <ng-container *ngIf="cellMerge">
      <textarea [ngClass]="inputClass"
        class="form-control"
        [(ngModel)]="cell.newValue.text"
        [name]="cell.getId()"
        [disabled]="!cell.isEditable()"
        [placeholder]="cell.getTitle()"
        (click)="onClick.emit($event)"
        (keydown.enter)="onEdited.emit($event)"
        (keydown.esc)="onStopEditing.emit()">
      </textarea>
    </ng-container>
    <ng-container *ngIf="!cellMerge">
      <textarea [ngClass]="inputClass"
        class="form-control"
        [(ngModel)]="cell.newValue"
        [name]="cell.getId()"
        [disabled]="!cell.isEditable()"
        [placeholder]="cell.getTitle()"
        (click)="onClick.emit($event)"
        (keydown.enter)="onEdited.emit($event)"
        (keydown.esc)="onStopEditing.emit()">
      </textarea>
    </ng-container>
    
    `,
})
export class TextareaEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }


}
