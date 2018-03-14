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
import { ProjectmanageRoutingModule } from "./projectmanage-routing.module";
import { ProjectsComponent } from './projects/projects.component';
import { VersionsComponent } from './versions/versions.component';
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatPaginatorModule
} from '@angular/material';
import { ModulesComponent } from './modules/modules.component';
import { PowerFloatComponent } from '../../plugins/power-float/power-float.component';
export let ProjectManageModuleAddMenu = (navbar) => {
    navbar.add_menu({
        id: 'projectManageMenu', submenu: [
            {
                id: 'projectmanage', name: '项目管理', icon: 'input',
                submenu: [
                    { id: 'projects', name: '项目管理', icon: 'input', link: '/projectmanage/projects' },
                    { id: 'versions', name: '版本管理', icon: 'input', link: '/projectmanage/versions' },
                    { id: 'modules', name: '模块管理', icon: 'input', link: '/projectmanage/modules' },
                ]
            }
        ]
    });
};

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
        ProjectmanageRoutingModule,
        PageModule,
        FlexLayoutModule,
        TopCommonModule,
        ToasterModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatIconModule,
        MatPaginatorModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: DemoHttpLoaderFactory,
                deps: [HttpClient]
            }
            //,isolate:true
        })
    ],
    declarations: [ProjectsComponent, ModulesComponent, VersionsComponent, PowerFloatComponent],
    providers: []
})


export class ProjectManageModule {
    constructor(translate: TranslateService) {
        translate.setDefaultLang('zh_CN');
        //    translate.use('en') ;
        translate.use('zh_CN');
    }

}
