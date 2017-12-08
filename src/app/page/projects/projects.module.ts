import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PageModule } from "../page.module";
import { MaterialModule, MdNativeDateModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToasterModule } from 'angular2-toaster';
import { DynamicFormsBootstrapUIModule } from "../../plugins/dynamic-forms/ui-bootstrap/ui-bootstrap.module";
import { TopCommonModule } from "../../common/topcommon.module";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from './projects.component';

export let ProjectsModuleAddMenu = (navbar) => {
    navbar.add_menu({
        id: 'PROJECTS', submenu: [
            {
                id: 'projects', name: '项目管理', icon: 'input', link: '/projects/projects'
            }
        ]
    });
};
@NgModule({
    imports: [
        CommonModule,
        NgxDatatableModule,
        ProjectsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsBootstrapUIModule,
        PageModule,
        FlexLayoutModule,
        TopCommonModule,
        ToasterModule,
        MaterialModule,
        MdNativeDateModule
    ],
    declarations: [ProjectsComponent],
    providers: []
})

export class ProjectsModule { }
