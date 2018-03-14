// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
// import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { HttpClient } from "@angular/common/http";
// import { NgxDatatableModule } from "@swimlane/ngx-datatable";
// import { ToasterModule } from 'angular2-toaster';
// import { PageModule } from "../page.module";
// import { TopCommonModule } from "../../common/topcommon.module";

// import { SystemLogRoutingModule } from "./systemlog-routing.module";
// import { SelfTestRecordsComponent } from './self-test-records/self-test-records.component';
// import { OperationLogComponent } from './operation-log/operation-log.component';
// // import { LoginLogListComponent } from "./login-log-list/login-log-list.component";
// // import { OperationLogListComponent } from './operation-log-list/operation-log-list.component'


// // export let SystemLogModuleAddMenu = (navbar) => {
// //   navbar.add_menu({
// //     id: 'systemlogMenu', submenu: [
// //       {
// //         id: 'system-log', name: '系统日志', icon: 'input',
// //         submenu: [
// //           { id: 'self-test-records', name: '我的自测记录', icon: 'input', link: '/system-log/self-test-records' },
// //         ]
// //       }
// //     ]
// //   });
// // };

// // AoT requires an exported function for factories
// export function DemoHttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/demo/');
// }

// @NgModule({
//   imports: [
//     CommonModule,
//     NgxDatatableModule,
//     SystemLogRoutingModule,
//     FormsModule,
//     ReactiveFormsModule,
//     PageModule,
//     FlexLayoutModule,
//     TopCommonModule,
//     ToasterModule,
//     TranslateModule.forChild({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: DemoHttpLoaderFactory,
//         deps: [HttpClient]
//       }
//       //,isolate:true
//     })
//   ],
//   declarations: [SelfTestRecordsComponent, OperationLogComponent,],
//   providers: []
// })


// export class SystemLogModule {
//   constructor(translate: TranslateService) {
//     translate.setDefaultLang('zh_CN');
//     //    translate.use('en') ;
//     translate.use('zh_CN');
//   }

// }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ToasterModule } from 'angular2-toaster';
import { PageModule } from "../page.module";
import { TopCommonModule } from "../../common/topcommon.module";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";

import { SystemLogRoutingModule } from "./systemlog-routing.module";
import { SelfTestRecordsComponent } from './self-test-records/self-test-records.component';
import { OperationLogComponent } from './operation-log/operation-log.component';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule,
} from '@angular/material';

// AoT requires an exported function for factories
export function DemoHttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/demo/');
}

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgxDatatableModule,
        DynamicFormsMaterialUIModule,
        SystemLogRoutingModule,
        PageModule,
        FlexLayoutModule,
        TopCommonModule,
        ToasterModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatTabsModule,
        MatSlideToggleModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: DemoHttpLoaderFactory,
                deps: [HttpClient]
            }
            //,isolate:true
        })
    ],
    declarations: [SelfTestRecordsComponent, OperationLogComponent],
    providers: []
})


export class SystemLogModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('zh_CN');
    //    translate.use('en') ;
    translate.use('zh_CN');
  }

}
