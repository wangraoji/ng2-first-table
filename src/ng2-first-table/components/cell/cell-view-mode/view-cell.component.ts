import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
    selector: 'table-cell-view-mode',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <ng-container *ngSwitchDefault>
            <ng-container *ngIf="!isCellMerge">
                <div *ngIf="!customizeColumn">{{ cell.getValue() }}</div>
                <div *ngIf="customizeColumn" [innerHTML]="cell.getValue()"></div>
            </ng-container>
            <ng-container *ngIf="isCellMerge">
                <div *ngIf="!customizeColumn">{{ cell.getValue().text }}</div>
                <div *ngIf="customizeColumn" [innerHTML]="cell.getValue().text"></div>
            </ng-container>
        </ng-container>
    </div>
    `,
})
export class ViewCellComponent {

    @Input() cell: Cell;
    @Input() customizeColumn: boolean;
    @Input() isCellMerge: boolean;

    ngOnChanges(){
        console.info(this.cell);
    }
}
