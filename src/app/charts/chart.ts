
export interface  IChartSeries{
  type:string;
  name?:string;
  ds?:string;
  data?:any;
};

//base on ECharts options
//view doc http://echarts.baidu.com/option.html
export interface IChartOption{
  title?:{
    text?:string
  };
  series?:IChartSeries[]
};

export enum ChartDataSouceType{
  TSDB=0
};

export interface IChartDataSource{
  type:ChartDataSouceType;
  datasource:string;
  params:any;
};

export enum ChartType{
  ECHARTS=0
};

export class Chart {
  type:ChartType;
  dataSource:IChartDataSource;
  options:IChartOption;
};
