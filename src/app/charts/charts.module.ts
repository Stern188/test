import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartComponent} from "./chart/chart.component";
import {ChartViewComponent} from "./chart-view/chart-view.component";
import {ChartEditorComponent} from "./chart-editor/chart-editor.component";
import {DynamicFormsBootstrapUIModule} from "../dynamic-forms/ui-bootstrap/ui-bootstrap.module";
import {AngularEchartsModule} from "ngx-echarts";
import {TopCommonModule} from "../common/topcommon.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AngularEchartsModule,
    FlexLayoutModule,
    TopCommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsBootstrapUIModule
  ],
  exports:[
    ChartComponent,
    ChartViewComponent,
    ChartEditorComponent
  ],
  declarations: [ChartComponent, ChartViewComponent, ChartEditorComponent ],
  providers:[]
})

export class ChartsModule {


}
