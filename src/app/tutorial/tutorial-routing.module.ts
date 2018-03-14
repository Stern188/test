/**
 * Created by conan on 7/17/2017.
 */


import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TStartComponent} from "./tstart/tstart.component";
import {TLoginComponent} from "./tlogin/tlogin.component";
const routes: Routes = [
  { path: 'tstart',component:  TStartComponent},
  { path: 'tlogin',component:  TLoginComponent},
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TutorialRoutingModule{

}
