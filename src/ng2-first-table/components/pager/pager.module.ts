import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagerComponent } from './pager.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PagerComponent,
  ],
  exports: [
    PagerComponent,
  ],
})
export class PagerModule { }
