import { Injectable } from '@angular/core';
import {IDashboardScene} from "./dashboard-scene";
import {Observable, ObservableInput} from "rxjs/Observable";
import {Http} from "@angular/http";
import {AppSettings} from "../app.settings";

@Injectable()
export class DashboardService {

  constructor(private  http:Http) { }

  public getAllScenes():Observable<IDashboardScene[]>{

      return this.http.get(AppSettings.env_vars.API_URL+'/dashboard')
        .map(response=>{
          return response.json() as IDashboardScene[];
        })
        .catch( this.handleError);

  }

  public getScenseByID(id:string):Observable<IDashboardScene>{
      return this.http.get(AppSettings.env_vars.API_URL+'/dashboard/'+id)
        .map(response=>{
          return response.json() as IDashboardScene;
        })
        .catch( this.handleError);
  }

  public handleError(error,caught):ObservableInput<any>{
          console.log(error);
          return Observable.throw(error);
  }
}
