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
import { UsermanageRoutingModule } from "./usermanage-routing.module";
import { MembersComponent } from './members/members.component';
import { PersonalsettingsComponent } from './personalsettings/personalsettings.component';
import { RoleManageComponent } from './role-manage/role-manage.component';
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule
} from '@angular/material';
export let UserManageModuleAddMenu = (navbar) => {
    navbar.add_menu({
        id: 'userManageMenu', submenu: [
            {
                id: 'usermanage', name: '用户管理', icon: 'input',
                submenu: [
                    { id: 'members', name: '添加用户', icon: 'input', link: '/usermanage/members' },
                    { id: 'role-manage', name: '角色管理', icon: 'input', link: '/usermanage/role-manage' },
                    { id: 'personalsettings', name: '个人设置', icon: 'input', link: '/usermanage/personalsettings' },
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
        UsermanageRoutingModule,
        PageModule,
        FlexLayoutModule,
        TopCommonModule,
        ToasterModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatTabsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: DemoHttpLoaderFactory,
                deps: [HttpClient]
            }
            //,isolate:true
        })
    ],
    declarations: [MembersComponent, PersonalsettingsComponent, RoleManageComponent],
    providers: []
})


export class UserManageModule {
    constructor(translate: TranslateService) {
        translate.setDefaultLang('zh_CN');
        //    translate.use('en') ;
        translate.use('zh_CN');
    }

}
