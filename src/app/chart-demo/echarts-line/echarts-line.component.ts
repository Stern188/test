import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart, ChartType, IChartOption, IChartSeries} from "../../charts/chart";
import {DemochartService } from "../demochart.service";
import * as moment from 'moment';
import {IStatistics, TSDBChart} from "../../charts/statistics.type";
import {NavbarService} from "../../navbar/navbar.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/concatMap";
import {ChartComponentStatus} from "../../charts/chart/chart.component";
@Component({
  selector: 'app-echarts-line',
  templateUrl: './echarts-line.component.html',
  styleUrls: ['./echarts-line.component.scss']
})
export class EchartsLineComponent implements OnInit {

  public chart:TSDBChart;
  public ChartType=ChartType;
  @ViewChild('line1') line1;
  public chartOptions1;
  public debug:Observable<TSDBChart>;
  constructor(private navbar:NavbarService,private chartSv:DemochartService) { }
  public data_id:string;

  ngOnInit() {
    this.chart= new TSDBChart();
    //添加数据源
    this.chart.tsdbParam.serials= [
        {
          type:'serial',
          n:20,
          name:'line1'
        }
    ];
    this.chart.title =  '曲线图';
    //数据源映射为曲线图
    this.chart.options.series.push({
      ds:'line1',
      name:'demoline1',
      type:'line',
    } as IChartSeries);

  }

  onClick(){
    this.chart.startTime = moment().startOf('day').toDate();
    this.chart.endTime = moment().toDate();
    this.debug = this.chartSv.startNewStatistics( this.chart.tsdbParam )
      .concatMap((info,i)=>{
        return Observable.interval(100)
          .concatMap((v,i)=>{
          return this.chartSv.checkStatisticsStatus(info);
          })
          .filter(x=>x.status === 'finish')
          .take(1)
      }).map(x=>this.chart.mapTsdbData(x));
  }

  changeMode(){
    this.line1.status= this.line1.status == ChartComponentStatus.EDIT?
      ChartComponentStatus.VIEW:
      ChartComponentStatus.EDIT;
  }
}
