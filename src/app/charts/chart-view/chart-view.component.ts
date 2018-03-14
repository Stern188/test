import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Chart} from "../chart";

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartViewComponent implements OnInit {

  @Input() chart:Chart;
  constructor() { }

  ngOnInit() {
  }

  get chartOptions(){
    return this.chart.options;
  }

}
