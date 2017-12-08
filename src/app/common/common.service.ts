import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, ObservableInput } from "rxjs/Observable";

@Injectable()
export class CommonService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }
    get(url) {
        return this.http.get(url)
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