import { Component, OnInit } from '@angular/core';
import { NavbarService } from "../../navbar/navbar.service";
import { IDashboardScene } from "../dashboard/dashboard-scene";
import { Observable } from "rxjs/Observable";
import { GridsterConfig } from "angular-gridster2";
import { AppSettings } from "../../app.settings";
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-dashboard',
  providers: [CommonService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private dashboardurl = `${AppSettings.env_vars.API_URL}/dashboard`;

  public scenes: Observable<IDashboardScene[]>;
  private _selectedSceneID: string = "";
  public scene: Observable<IDashboardScene>;
  public options: GridsterConfig;

  constructor(private Navbar: NavbarService, private commonService: CommonService) { }
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
    }; debugger;
    this.commonService.get(this.dashboardurl).subscribe(data => {
      this.scenes = data;
    });
  }

  get selectedSceneID(): string {
    return this._selectedSceneID;
  }

  set selectedSceneID(value: string) {
    this._selectedSceneID = value;
    if (this._selectedSceneID.length > 0) {
      this.commonService.get(`${this.dashboardurl}/${this._selectedSceneID}`).subscribe(index => {
        this.scenes = index;
      });;
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
