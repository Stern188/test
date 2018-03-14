/**
 * Created by conan on 2017/7/31.
 */
import {Chart, ChartDataSouceType, ChartType, IChartDataSource, IChartOption} from "./chart";

export enum StatisStatus{
  Start,
  Finish,
  Error
}

export enum StatSerialType{
  Top,
  chance,
  serial,
}

export  interface IStatSerial{
  type:string|StatSerialType;
  n:number;
  name?:string;
  field?:string|string[];
  data?:any[];
}

export interface  IStatistics{
  id?:string;
  status?:StatisStatus;
  start:Date;
  end:Date;
  pattern?:string;
  serials:IStatSerial[]
};

export class TSDBChart implements Chart{

  type:ChartType;
  dataSource:IChartDataSource;
  _options:IChartOption;

  private _tsdbParam:IStatistics;
  constructor(){
    this.type = ChartType.ECHARTS;
    this.dataSource = {type : ChartDataSouceType.TSDB} as IChartDataSource;
    this._options={
      title: {
        text: ''
      },
      tooltip : {
      },
      yAxis : {},
      series : [
      ]} as IChartOption;
    this.__gen_tsdbParam();
  }

//private functions
  private __gen_tsdbParam(){
    if(!this._tsdbParam){
      this._tsdbParam={
        start:null,
        end:null,
        serials:[]
      } as IStatistics;
    }
  }
//getter and setters
  get tsdbParam(){
    return this._tsdbParam;
  }

  set tsdbParam(v) {
    this._tsdbParam = v;
  }

  get endTime(){
    return this._tsdbParam.start;
  }

  set endTime(v){
    this._tsdbParam.end=v;
  }

  get startTime(){
    return this._tsdbParam.start;
  }

  set startTime(v){
    this._tsdbParam.start=v;
  }

  get options(){
    return this._options;
  }

  set options(o){
    this._options=Object.assign({},this._options,o);
  }

  get title(){
    return this._options.title.text;
  }

  set title(t){
    this.options ={title:{text:t}} as IChartOption;
  }

//public functions
  public mapTsdbData(d):TSDBChart{
    let maxXAxisLen=0;
    for(let s of d.serials){
      let chartSerie = Object.assign({},s);
      for(let e of this.options.series){
        if(e.ds == s.name){
          e.data = s.data.map((v,i,a)=>{ return {value:v,name:i};});
          maxXAxisLen=
            maxXAxisLen>e.data.length?maxXAxisLen:e.data.length;
        }
      }
    }
    //触发echarts的options变更,重绘图
    this._options = Object.assign({
      xAxis:{
        data: Array.from( Array(maxXAxisLen).keys())
      }
    },this._options);
    return this;
  }
}
