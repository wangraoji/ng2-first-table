import { Injectable } from '@angular/core';

import { peizhiDatas } from './zujianpeizhi';

@Injectable()

export class DocumentationService {

    getPeizhiDatas(): Promise<any> {
        return Promise.resolve(peizhiDatas);
    }
    
    getPeizhiDatas1() {
        return peizhiDatas;
    }
}      