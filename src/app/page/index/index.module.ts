import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdNativeDateModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopCommonModule } from "../../common/topcommon.module";
import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from './index.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from "@ngx-translate/core";

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
        NgxDatatableModule,
        IndexRoutingModule,
        FlexLayoutModule,
        MaterialModule,
        MdNativeDateModule,
        FormsModule,
        TranslateModule,
        // NgbModule.forRoot(),
        TopCommonModule,
        ReactiveFormsModule,
    ],
    declarations: [IndexComponent],
    providers: []
})

export class IndexModule { }
