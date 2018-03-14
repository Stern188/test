import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartsRoutingModule} from "./charts-routing.module";
import {NavbarService} from "../navbar/navbar.service";
import {PageModule} from "../page/page.module";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {MarkdownModule} from "angular2-markdown";
import { EchartsLineComponent } from './echarts-line/echarts-line.component';
import {DemochartService} from "./demochart.service";
import {TopCommonModule} from "../common/topcommon.module";
import {ChartsModule} from "../charts/charts.module";

export let ChartsModuelAddMenu=(navbar)=>{
  navbar.add_menu({
      id:'CHARTS',submenu:[
        {
          id: 'echarts', name: 'echarts', icon: 'view_quilt',submenu:[{
          id: 'line', name: 'line', icon: 'view_quilt', link: 'chart-demo/echarts_line'
          }]
        }
      ]
    });
}
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,   
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class DemoMaterialModule {}
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    PageModule,
    MarkdownModule,
    TopCommonModule,
    ChartsModule,
    ChartsRoutingModule
  ],
  providers:[DemochartService],
  declarations: [EchartsLineComponent]
})

export class ChartDemoModule {

  constructor(private navbar:NavbarService){
    ChartsModuelAddMenu(this.navbar);
  }


}
