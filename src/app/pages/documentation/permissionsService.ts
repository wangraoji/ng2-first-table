import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Logs } from '../../../../node_modules/_@types_selenium-webdriver@2.53.42@@types/selenium-webdriver';
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
