import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from './index.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";  //引用table
import { FlexLayoutModule } from '@angular/flex-layout';   //引用布局样式
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule
} from '@angular/material';  //引用组件库里面的样式和功能

export let IndexModuleAddMenu = (navbar) => {
    navbar.add_menu({
        id: 'INDEX', submenu: [
            {
                id: 'index', name: '首页', icon: 'input', link: '/index/index'
            }
        ]
    });
};
@NgModule({
    imports: [
        CommonModule,
        IndexRoutingModule,
        NgxDatatableModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatTabsModule
    ],
    declarations: [IndexComponent],
    providers: []
})

export class IndexModule { }
