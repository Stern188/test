import {Component, Input, OnInit} from '@angular/core';
import {Chart} from "../chart";

export  enum ChartComponentStatus{
  VIEW=0,
  EDIT=1,
};
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  private  _status:ChartComponentStatus;
  public  readonly ChartComponentStatus=ChartComponentStatus;
  @Input() chart:Chart;

  constructor() {
    this._status=ChartComponentStatus.VIEW;
  }

  ngOnInit() {
  }

  get status():ChartComponentStatus{
    return this._status;
  }
  set status(v:ChartComponentStatus){
    this._status=v;
  }
}
