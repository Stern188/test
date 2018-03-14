/**
 * Created by conan on 7/17/2017.
 */


import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EchartsLineComponent} from "./echarts-line/echarts-line.component";
const routes: Routes = [
  { path: 'echarts_line',component:  EchartsLineComponent},
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ChartsRoutingModule{

}
