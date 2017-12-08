/**
 * Created by conan on 7/17/2017.
 */


import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
    { path: 'dashboard',component:  DashboardComponent}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule{

}
