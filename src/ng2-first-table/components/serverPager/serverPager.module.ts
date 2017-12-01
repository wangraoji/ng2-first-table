import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerPagerComponent } from './serverPager.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ServerPagerComponent,
  ],
  exports: [
    ServerPagerComponent,
  ],
})
export class ServerPagerModule { }
