import { Component, Output, EventEmitter, Input} from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

export class DefaultEditor implements Editor {
  @Input() cell: Cell;
  @Input() inputClass: string;
  @Input() cellMerge: boolean;
  @Input() setColumns: any;
  @Input() selectLinkageData: any;

  @Output() onStopEditing = new EventEmitter<any>();
  @Output() onEdited = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();
  // @Output() onChange = new EventEmitter<any>();
}

export interface Editor {
  cell: Cell;
  cellMerge: boolean;
  setColumns: any;
  inputClass: string;
  selectLinkageData: any;
  onStopEditing: EventEmitter<any>;
  onEdited: EventEmitter<any>;
  onClick: EventEmitter<any>;
  // onChange: EventEmitter<any>;
}
