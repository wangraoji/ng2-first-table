import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PermissionsService {

    constructor(protected http: Http) { }

    getPermissions(password): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`http://rap2api.taobao.org/app/mock/1031/GET/psd=${password}`).subscribe((res: Response) => {
                resolve(res.json());
            });
        });
    }
}
