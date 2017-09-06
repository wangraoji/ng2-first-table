import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-view-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <ng-container *ngSwitchDefault>
            <div *ngIf="!customizeColumn">{{ cell.getValue() }}</div>
            <div *ngIf="customizeColumn" [innerHTML]="cell.getValue()"></div>
        </ng-container>
       
    </div>
    `,
})
export class ViewCellComponent {

  @Input() cell: Cell;
  @Input() customizeColumn: boolean;
  
}
