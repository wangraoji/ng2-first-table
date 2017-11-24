import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

// 去除消除HTML警告
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'table-cell-view-mode',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="clearWarning(cell.getValue())"></div>
        <ng-container *ngSwitchDefault>
            <ng-container *ngIf="!isCellMerge">
                <div *ngIf="!customizeColumn">{{ cell.getValue() }}</div>
                <div *ngIf="customizeColumn" [innerHTML]="clearWarning(cell.getValue())"></div>
            </ng-container>
            <ng-container *ngIf="isCellMerge">
                <div *ngIf="!customizeColumn">{{ cell.getValue().text }}</div>
                <div *ngIf="customizeColumn" [innerHTML]="clearWarning(cell.getValue().text)"></div>
            </ng-container>
        </ng-container>
    </div>
    `,
})
export class ViewCellComponent {
    /*

    */
    @Input() cell: Cell;
    @Input() customizeColumn: boolean;
    @Input() isCellMerge: boolean;
    constructor(private domSanitizer: DomSanitizer) { }


    clearWarning(html: any): any {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}
