import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';

@Component({
  selector: 'ng2-first-table-title',
  styleUrls: ['./title.component.scss'],
  template: `
    
    <ng-container *ngIf="column.isSortable">
        <a href="#" *ngIf="!customizeColumn"
              (click)="_sort($event, column)"
              class="ng2-smart-sort-link sort"
              [ngClass]="currentDirection">
          {{ column.title }}
        </a>
        <a href="#" *ngIf="customizeColumn"
              (click)="_sort($event, column)"
              class="ng2-smart-sort-link sort"
              [ngClass]="currentDirection" [innerHTML]="column.html">
        </a>
    </ng-container>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
})
export class TitleComponent implements OnChanges {

  currentDirection = '';
  @Input() column: Column;
  @Input() source: DataSource;
  @Input() grid: any;
  @Input() customizeColumn: boolean;
  @Output() sort = new EventEmitter<any>();

  protected dataChangedSub: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    // console.info(1);
    if (changes.source) {
      if (!changes.source.firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        const sortConf = this.source.getSort();

        if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
          this.currentDirection = sortConf[0]['direction'];

        } else {
          this.currentDirection = '';

          
        }

        sortConf.forEach((fieldConf: any) => {

        });
      });
    }
  }

  _sort(event: any) {
    event.preventDefault();
    this.changeSortDirection();
    this.source.setSort([
      {
        field: this.column.id,
        direction: this.currentDirection,
        compare: [this.column.getCompareFunction(),this.grid],
      },
    ]);

    // console.info(this.source.setSort([
    //   {
    //     field: this.column.id,
    //     direction: this.currentDirection,
    //     compare: [this.column.getCompareFunction(),this.grid],
    //   },
    // ]));

    this.sort.emit(null);
  }

  changeSortDirection(): string {
    // console.info(this.currentDirection);
    if (this.currentDirection) {
      const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
      this.currentDirection = newDirection;
    } else {
      this.currentDirection = this.column.sortDirection;
    }
    return this.currentDirection;
  }
}
