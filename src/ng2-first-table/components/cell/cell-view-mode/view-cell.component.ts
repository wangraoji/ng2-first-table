import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
    selector: 'table-cell-view-mode',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue() | sanitizeHtml"></div>
        <div *ngSwitchCase="'inputCheckbox'" >
            <input type="checkbox" [(ngModel)]="cell['value']" (change)="changeFn(cell)" 
            [disabled]="this.cell.getColumn()['settings'].disabled === 'true' ? true : false"/>
        </div>
        
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

    // booleanCell: string;
    ngOnChanges() {
        // console.info(this.cell.getColumn()['settings']);
    }
    changeFn(event: any) {
        console.info(event);
    }
}
