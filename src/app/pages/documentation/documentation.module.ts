import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { routes } from './documentation.routes';

import { DocumentationComponent } from './documentation.component';

import { DocumentationService } from './documentation.service';

import { PermissionsService } from './permissionsService';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
  declarations: [
    DocumentationComponent,
  ],
  providers: [
    DocumentationService,
    PermissionsService,
  ],
})
export class DocumentationModule { }
