import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AppSettings} from "../app.settings";
import {Observable, ObservableInput} from "rxjs/Observable";
import {isString} from "util";
import {IStatistics} from "../charts/statistics.type";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class DemochartService {

  constructor(private  http:Http) {
  }

  startNewStatistics(param:IStatistics){
    return this.http.post(AppSettings.env_vars.API_URL+'/audit/statistics/info',param)
      .do(x=>console.log(x))
      .map(response=>response.json())
      .catch( this.handleError);
  }

  checkStatisticsStatus(id:IStatistics|string){
    let sid:string =  isString(id)?(<string>id):(<IStatistics>id).id;
    return this.http.get(`${AppSettings.env_vars.API_URL}/audit/statistics/info/${sid}`)
      .do((x)=>console.log('get statistics info status'))
      .map(response=>{
        return response.json() as IStatistics;
      })
      .catch( this.handleError);
  }

  getStatistics(id:IStatistics|string){
    let sid:string =  isString(id)?(<string>id):(<IStatistics>id).id;
    return this.http.get(AppSettings.env_vars.API_URL+'/audit/statistics/info/${sid}')
      .map(response=>{
        return response.json() as IStatistics[];
      })
      .catch( this.handleError);
  }

  public handleError(error,caught):ObservableInput<any>{
    console.log(error);
    return Observable.throw(error);
  }
}
