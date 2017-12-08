import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {NavbarService} from "../navbar/navbar.service";
import {MaterialModule} from "@angular/material";
import {DashboardService} from "./dashboard.service";
import {PageModule} from "../page/page.module";
import {FormsModule} from "@angular/forms";
import {GridsterModule} from "angular-gridster2";

export let DashboardModuleAddMenu=(navbar)=>{
  navbar.add_menu({
      id:'DASHBOARD',submenu:[
        {
          id: 'dashboard', name: 'Dashboard', icon: 'input',  link:'/dashboard/dashboard',
          submenu: [
            {id: 'dashboard', name: 'Dashboard', icon: 'input',  link:'/dashboard/dashboard'}
          ]
        }
      ]
    });
};
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    PageModule,
    GridsterModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers:[DashboardService]
})

export class DashboardModule {
  constructor(private navbar:NavbarService){
    DashboardModuleAddMenu( this.navbar);
  }


}
