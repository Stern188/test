import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../navbar/navbar.service";
import {IDashboardScene} from "../dashboard-scene";
import {DashboardService} from "../dashboard.service";
import {Observable} from "rxjs/Observable";
import {GridsterConfig} from "angular-gridster2";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public scenes:Observable<IDashboardScene[]>;
  private _selectedSceneID:string="";
  public scene:Observable<IDashboardScene>;
  public options: GridsterConfig;

  constructor(private Navbar:NavbarService,private dashboard:DashboardService) { }

  ngOnInit() {
    this.options = {
      gridType: 'fit',
      compactType: 'none',
      /*itemChangeCallback: AppComponent.itemChange,
       itemResizeCallback: AppComponent.itemResize,
       itemInitCallback: AppComponent.itemInit,*/
      margin: 10,
      outerMargin: true,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 50,
      minItemCols: 1,
      maxItemRows: 50,
      minItemRows: 1,
      defaultItemCols: 6,
      defaultItemRows: 1,
      fixedColWidth: 250,
      fixedRowHeight: 250,
      draggable: {
        enabled: true,
        /*stop: AppComponent.eventStop*/
      },
      resizable: {
        enabled: true,
        /*stop: AppComponent.eventStop*/
      },
      swap: false,
      displayGrid: 'onDrag&Resize'
    };
    this.scenes = this.dashboard.getAllScenes();
  }

  get selectedSceneID(): string {
    return this._selectedSceneID;
  }

  set selectedSceneID(value: string) {
    this._selectedSceneID = value;
    if(this._selectedSceneID.length > 0){
      this.scene = this.dashboard.getScenseByID(this._selectedSceneID);
    }
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
  };

  addItem() {
  };

}
