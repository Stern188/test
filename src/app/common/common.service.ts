import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, ObservableInput } from "rxjs/Observable";
import { MatPaginatorIntl } from '@angular/material';

@Injectable()
export class CommonService {
    private headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Bearer " + localStorage.getItem("id_token") });
    constructor(private matPaginatorIntl: MatPaginatorIntl, private http: Http) {
        matPaginatorIntl.itemsPerPageLabel = "每页显示";
        matPaginatorIntl.firstPageLabel = "首页";
        matPaginatorIntl.lastPageLabel = "最后一页";
        matPaginatorIntl.nextPageLabel = "下一页";
        matPaginatorIntl.previousPageLabel = "上一页";
    }
    get(url) {
        return this.http.get(url, { headers: this.headers })
            .map(response => response.json())
            .catch(this.handleError);
    }
    create(url, data: object) {
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .map(res => res.json())
            .catch(this.handleError);
    }
    update(url, data: object) {
        return this.http
            .put(url, JSON.stringify(data), { headers: this.headers })
            .map(() => data)
            .catch(this.handleError);
    }
    delete(url) {
        return this.http.delete(url, { headers: this.headers })
            .map(() => null)
            .catch(this.handleError);
    }
    public handleError(error, caught): ObservableInput<any> {
        return Observable.throw(error);
    }
}