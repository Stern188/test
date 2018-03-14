import { Component, OnInit } from '@angular/core';
import { NavbarService } from "../../navbar/navbar.service";
import { IDashboardScene } from "../dashboard-scene";
import { DashboardService } from "../dashboard.service";
import { Observable } from "rxjs/Observable";
import { GridsterConfig } from "angular-gridster2";
import { AngularEchartsModule } from "ngx-echarts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public echartsOption: any;
  public scenes: Observable<IDashboardScene[]>;
  private _selectedSceneID: string = "";
  public scene: Observable<IDashboardScene>;
  public options: GridsterConfig;
  public echartsIntance: any;
  constructor(private Navbar: NavbarService, private dashboard: DashboardService, private nes: AngularEchartsModule) { }
  /*change 触发*/
  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }
  /*Resize 触发*/
  static itemResize(item, itemComponent) {
    // demo1.style.width = itemComponent.itemHeight + 'px';
    // demo1.style.height = itemComponent.itemHeight - 20 + 'px';
    // let demo1 = document.getElementById('demo1');
    //echarts.init(demo1);
    /* 从新渲染 echarts怎么搞*/
    //this.echartsIntance.resize();
    // this.echartsIntance.setOption(this.echartsOption);
    console.info('itemResized', item, itemComponent);
  }
  ngOnInit() {
    let self = this;
    this.options = {
      gridType: 'fit',
      compactType: 'none',/*对齐类型*/
      itemChangeCallback: function (item, itemComponent) {
        let demo1 = document.getElementById('demo1');
        demo1.style.width = itemComponent.itemWidth + 'px';
        demo1.style.height = itemComponent.itemHeight - 20 + 'px';
        self.echartsIntance.resize();
      },
      itemResizeCallback: function (item, itemComponent) {
        // let demo1 = document.getElementById('demo1');
        // demo1.style.width = itemComponent.itemHeight + 'px';
        // demo1.style.height = itemComponent.itemHeight - 20 + 'px';
        //echarts.init(demo1);
        /* 从新渲染 echarts怎么搞*/
        //self.echartsIntance.clear();
        // this.echartsIntance.setOption(this.echartsOption);
        console.info('itemResized', item, itemComponent);
      },
      /*itemChangeCallback: AppComponent.itemChange,
       itemResizeCallback: AppComponent.itemResize,
       itemInitCallback: AppComponent.itemInit,*/
      margin: 10,
      outerMargin: true,
      minCols: 1,
      maxCols: 8,
      minRows: 1,
      maxRows: 10,
      maxItemCols: 5,
      minItemCols: 1,
      maxItemRows: 5,
      minItemRows: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 250,
      fixedRowHeight: 250,
      draggable: { /*是否可拖拽*/
        enabled: true,
        /*stop: AppComponent.eventStop*/
      },
      resizable: { /*是否可以缩放*/
        enabled: true,
        /*stop: AppComponent.eventStop*/
      },
      swap: false,
      displayGrid: 'onDrag&Resize' /*显示行和列的背景网格。选项：'永远' 缩放和拖拽时| 从不*/
    };
    this.scenes = this.dashboard.getAllScenes();

    this.echartsOption = {
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
  }


  get selectedSceneID(): string {
    return this._selectedSceneID;
  }

  set selectedSceneID(value: string) {
    this._selectedSceneID = value;
    if (this._selectedSceneID.length > 0) {
      this.scene = this.dashboard.getScenseByID(this._selectedSceneID);
    }
  }

  changedOptions() {
    console.log('changedOptions');
    this.options.api.optionsChanged();
  }

  removeItem(event, item) {
    console.log('removeItem');
    //this.scene = this.dashboard.getScenseByID(this._selectedSceneID);
  };

  addItem() {
  };

  /*初始化*/
  onChartInit(ec) {
    this.echartsIntance = ec;
    console.log('onChartInit');
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
      console.log('resizeChart');
    }
  }
  getWidth() {
    if (this.echartsIntance) {
      console.log('getWidth():', this.echartsIntance.getWidth());
    }
  }

  getHeight() {
    if (this.echartsIntance) {
      console.log('getHeight():', this.echartsIntance.getHeight());
    }
  }

  getDom() {
    if (this.echartsIntance) {
      console.log('getDom():', this.echartsIntance.getDom());
    }
  }

  getOption() {
    if (this.echartsIntance) {
      console.log('getOption():', this.echartsIntance.getOption());
    }
  }

  clear() {
    if (this.echartsIntance) {
      this.echartsIntance.clear();
      console.log('clear() called');
    }
  }
}
