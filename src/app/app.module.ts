import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login/login.module";
import { Router } from "@angular/router";
import { AuthService } from "./login/auth.service";
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { BaseRequestOptions, Http, HttpModule, RequestOptions, XHRBackend } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs"; //@angular/material依赖hammerjs;
//import {MaterialModule, MdNativeDateModule} from "@angular/material";
import { CommonComponent } from './common/common.component'
import { CommonService } from './common/common.service';
import { HttpBackendProvider } from "./mockapi/mockapi.provider";
import { MockBackend } from "@angular/http/testing";
import { HeaderComponent } from './header/header.component';
import { HeaderService } from "./header/header.service";
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from "./navbar/navbar.service";
import { TopCommonModule } from "./common/topcommon.module";
import { FeaturesModule } from "./features/features.module";//demo页面可以删除
import { PageModule } from "./page/page.module";//demo页面可以删除
import { FeaturesModuleAddMenu } from "./features/features.module";
import { DashboardModuleAddMenu } from "./dashboard/dashboard.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserManageModuleAddMenu } from "./page/user-manage/usermanage.module";
// import { SystemManageModuleAddMenu } from "./page/systemlog/systemlog.module";
import { SystemLogModuleAddMenu } from "./page/system-log/systemlog-routing.module";
import { ProjectManageModuleAddMenu } from "./page/project-manage/projectmanage.module";
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
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartsModuelAddMenu } from "./chart-demo/chart-demo.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-modialog";
import { VexModalModule } from "ngx-modialog/plugins/vex";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TutorialModuleAddMenu } from './tutorial/tutorial.module';
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
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
export class DemoMaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TopCommonModule,
    DemoMaterialModule,
    // MaterialModule,
    // MdNativeDateModule,  
    ModalModule.forRoot(),
    VexModalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginModule,
    PageModule,
    FeaturesModule,
  ],
  exports: [
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    HttpBackendProvider,
    MockBackend,
    CommonComponent,
    CommonService,
    BaseRequestOptions,
    XHRBackend,
    AuthService,
    HeaderService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, navbar: NavbarService) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    //if use lazyload ,call Addmenu
    UserManageModuleAddMenu(navbar);
    ProjectManageModuleAddMenu(navbar);
    // SystemManageModuleAddMenu(navbar);
    SystemLogModuleAddMenu(navbar);
    /*插件开始 */
    FeaturesModuleAddMenu(navbar);
    DashboardModuleAddMenu(navbar);
    ChartsModuelAddMenu(navbar);
    TutorialModuleAddMenu(navbar);
    /*插件结束 */
    //add default menu navbar.add_menu();
  }
}
