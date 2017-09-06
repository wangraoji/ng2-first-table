import { Component, OnInit } from '@angular/core';

import { DocumentationService } from './documentation.service';

@Component({
  selector: 'demo',
  styleUrls: ['./documentation.component.scss'],
  templateUrl: './documentation.component.html',
})
export class DocumentationComponent {
    
    peizhiDatas: any;
    constructor(protected service: DocumentationService) {

    }
    
    getPeizhiDatas(): void {
        this.service.getPeizhiDatas().then((res: any) => this.peizhiDatas = res );

        // this.service.getPeizhiDatas1()
    }

    ngOnInit(): void {

      this.getPeizhiDatas();
    }
}
