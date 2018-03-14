import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarService } from "../navbar/navbar.service";
import { AngularEchartsModule } from "ngx-echarts";
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
import { DashboardService } from "./dashboard.service";
import { PageModule } from "../page/page.module";
import { FormsModule } from "@angular/forms";
import { GridsterModule } from "angular-gridster2";

export let DashboardModuleAddMenu = (navbar) => {
  navbar.add_menu({
    id: 'DASHBOARD', submenu: [
      {
        id: 'dashboard', name: 'Dashboard', icon: 'input', link: '/dashboard/dashboard',
        submenu: [
          { id: 'dashboard', name: 'Dashboard', icon: 'input', link: '/dashboard/dashboard' }
        ]
      }
    ]
  });
};
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
    AngularEchartsModule,
  ]
})
export class DemoMaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    PageModule,
    GridsterModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})

export class DashboardModule {
  constructor(private navbar: NavbarService) {
    DashboardModuleAddMenu(this.navbar);
  }


}
