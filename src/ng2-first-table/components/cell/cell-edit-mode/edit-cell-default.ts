import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

export class EditCellDefault {
  @Input() cell: Cell;
  @Input() cellMerge: boolean;
  @Input() setColumns: any;
  @Input() inputClass: string = '';
  @Input() selectLinkageData: any;
  
  @Output() edited = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  onEdited(event: any): boolean {
    this.edited.next(event);
    return false;
  }


  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onClick(event: any) {
    event.stopPropagation();
  }

}
