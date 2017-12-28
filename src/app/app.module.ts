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
import { MaterialModule, MdNativeDateModule } from "@angular/material";
import { HttpBackendProvider } from "./mockapi/mockapi.provider";
import { MockBackend } from "@angular/http/testing";
import { HeaderComponent } from './header/header.component';
import { HeaderService } from "./header/header.service";
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from "./navbar/navbar.service";
import { TopCommonModule } from "./common/topcommon.module";
import { PageModule } from "./page/page.module";//demo页面可以删除
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-modialog";
import { VexModalModule } from "ngx-modialog/plugins/vex";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { UserManageModuleAddMenu } from "./page/user-manage/usermanage.module";
import { ProjectsModuleAddMenu } from "./page/projects/projects.module";
import { VersionsModuleAddMenu } from "./page/versions/versions.module";
/*插件开始 */
import { PluginDemoModuleAddMenu } from "./plugin-demo/plugindemo.module";
import { DashboardModuleAddMenu } from "./dashboard/dashboard.module";
import { PluginDemoModule } from './plugin-demo/plugindemo.module';
import { BootstrapComponent } from './plugin-demo/bootstrap/bootstrap.component';
import { ButtonComponent } from './plugin-demo/button/button.component';
import { CheckboxComponent } from './plugin-demo/checkbox/checkbox.component';
import { ExpansionPanelComponent } from './plugin-demo/expansion-panel/expansion-panel.component';
import { Select2Component } from './plugin-demo/select2/select2.component';
import { FlexlayoutComponent } from './plugin-demo/flexlayout/flexlayout.component';
import { FloatComponent } from "./plugin-demo/float/float.component";
import { PowerFloatComponent } from './plugins/power-float/power-float.component';
import { LaydateComponent } from './plugin-demo/laydate/laydate.component';
import { JqueryLaydateComponent } from './plugins/jquery-laydate/jquery-laydate.component';
import { MarkdownComponent } from './plugin-demo/markdown/markdown.component';
import { MarkdownModule, MarkdownService } from "angular2-markdown";
import { ModalDialogComponent } from './plugin-demo/modal-dialog/modal-dialog.component';
import { ProgressSpinnerComponent } from './plugin-demo/progress-spinner/progress-spinner.component';
import { TabComponent } from './plugin-demo/tab/tab.component';
import { ToasterComponent } from './plugin-demo/toaster/toaster.component';
import { ToasterModule } from 'angular2-toaster';
import { TutorialComponent } from './plugin-demo/tutorial/tutorial.component';
import { FormComponent } from './plugin-demo/form/form.component';
import { DateGroupComponent } from './plugin-demo/date-group/date-group.component';
import { SearchDateComponent } from './plugins/search-date/search-date.component';
import { EqualValidator } from './plugin-demo/equal-validator.directive';
import { JqueryTawdateComponent } from './plugins/jquery-tawdate/jquery-tawdate.component';
import { ModalComponent } from './plugin-demo/modal/modal.component';
import { BsModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DycFormComponent } from './plugin-demo/dycform/dycform.component';
import { DynamicFormsBootstrapUIModule } from "./plugins/dynamic-forms/ui-bootstrap/ui-bootstrap.module";
/*插件结束 */

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
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    /*插件开始 */
    BootstrapComponent,
    ButtonComponent,
    CheckboxComponent,
    ExpansionPanelComponent,
    Select2Component,
    FlexlayoutComponent,
    FloatComponent,
    PowerFloatComponent,
    LaydateComponent,
    JqueryLaydateComponent,
    MarkdownComponent,
    ModalDialogComponent,
    ProgressSpinnerComponent,
    TabComponent,
    ToasterComponent,
    TutorialComponent,
    FormComponent,
    EqualValidator,
    DateGroupComponent,
    SearchDateComponent,
    JqueryTawdateComponent,
    ModalComponent,
    DycFormComponent
    /*插件结束 */
  ],
  imports: [
    /*插件开始 */
    MarkdownModule,
    ToasterModule,
    PluginDemoModule,
    BsModalModule,
    DynamicFormsBootstrapUIModule,
    /*插件结束 */
    BrowserModule,
    BrowserAnimationsModule,
    TopCommonModule,
    MaterialModule,
    MdNativeDateModule,
    DynamicFormsCoreModule.forRoot(),
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
    BaseRequestOptions,
    XHRBackend,
    AuthService,
    HeaderService,
    NavbarService,
    /*插件开始 */
    MarkdownService
    /*插件结束 */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, navbar: NavbarService) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    //if use lazyload ,call Addmenu
    UserManageModuleAddMenu(navbar);
    ProjectsModuleAddMenu(navbar);
    VersionsModuleAddMenu(navbar);
    /*插件开始 */
    PluginDemoModuleAddMenu(navbar);
    DashboardModuleAddMenu(navbar);
    /*插件结束 */
    //add default menu navbar.add_menu();
  }
}
