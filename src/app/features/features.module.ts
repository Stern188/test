import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from "../navbar/navbar.service";
import { ForminputComponent } from './forminput/forminput.component';
import { FeaturesRoutingModule } from "./features-routing.module";
import { PageModule } from "../page/page.module";
//import {MaterialModule} from "@angular/material";\
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopCommonModule } from "../common/topcommon.module";
import { FlexlayoutComponent } from './flexlayout/flexlayout.component';
import { MarkdComponent } from './markd/markd.component';
import { MarkdownModule, MarkdownService } from "angular2-markdown";
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { BootstrapStartComponent } from "./bootstrap/start.component";
//import { DycformComponent } from './dycform/dycform.component';
//import {DynamicFormsBootstrapUIModule} from "../dynamic-forms/ui-bootstrap/ui-bootstrap.module";
import { Select2DemoComponent } from './select2/select2-demo.component';
import { Tree1Component } from './tree1/tree1.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TreeModule } from "ng2-tree";
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterModule } from 'angular2-toaster';
import { DynamicFormsCoreModule, DYNAMIC_VALIDATORS, Validator, ValidatorFactory } from "@ng-dynamic-forms/core";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DynamicFormsBootstrapUIModule } from "@ng-dynamic-forms/ui-bootstrap";
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { DcyMatFormComponent } from './dcy-mat-form/dcy-mat-form.component';
import { DcyBootFormComponent } from './dcy-boot-form/dcy-boot-form.component';

import {
  customValidator,
  customDateRangeValidator,
  customForbiddenValidator,
  customAsyncFormGroupValidator
} from "./app.validators";
import { FilterComponent } from './table/filter/filter.component';
import { RowGroupingComponent } from './table/row-grouping/row-grouping.component';
import { RowDetailComponent } from './table/row-detail/row-detail.component';
import { SelectionSingleComponent } from './table/selection-single/selection-single.component';
import { SelectionMultiClickComponent } from './table/selection-multi-click/selection-multi-click.component';
import { SelectionChkboxComponent } from './table/selection-chkbox/selection-chkbox.component';
import { TemplateDomComponent } from './table/template-dom/template-dom.component';
import { ColumnToggleComponent } from './table/column-toggle/column-toggle.component';
import { SortingClientComponent } from './table/sorting-client/sorting-client.component';
import { DocumentationComponent } from './table/documentation/documentation.component';
import { VirtualComponent } from './table/virtual/virtual.component';
import { ContextmenuComponent } from './table/contextmenu/contextmenu.component';
import { FooterComponent } from './table/footer/footer.component';
import { CssComponent } from './table/css/css.component';
import { ResponsiveComponent } from './table/responsive/responsive.component';
import { PagingVirtualComponent } from './table/paging-virtual/paging-virtual.component';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { FloatComponent } from "./float/float.component";

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
  ],
})
export class DemoMaterialModule { }
export let FeaturesModuleAddMenu = (navbar) => {
  navbar.add_menu({
    id: 'FEATURES', submenu: [
      {
        id: 'features', name: 'Features', icon: 'view_quilt',
        submenu: [
          { id: 'markdown', name: 'markdown', link: '/features/markdown', icon: 'input' },
          { id: 'select2', name: 'select2', link: '/features/select2', icon: 'input' },
          { id: 'toaster', name: 'toaster', link: '/features/toaster', icon: 'input' },
          { id: 'dialog', name: 'dialog', link: '/features/modaldialog', icon: 'input' },
          { id: 'float', name: 'float', link: '/features/float', icon: 'input' }
        ]
      },
      {
        id: 'form', name: 'Form', icon: 'view_quilt',
        submenu: [
          { id: 'input', name: 'input', link: '/features/input', icon: 'input' },
          // {id: 'dycform', name: '动态Form', link: '/features/dycform', icon: 'input'},
          { id: 'matform', name: 'mat Form', link: '/features/dycmat', icon: 'input' },
          { id: 'botform', name: 'boot Form', link: '/features/dycbot', icon: 'input' }
        ]
      },
      {
        id: 'layout', name: 'Layout', icon: 'view_quilt',
        submenu: [
          { id: 'flexlayout', name: 'Flex Layout', link: '/features/flexlayout', icon: 'input' }]
      },
      {
        id: 'bootstrap', name: 'bootstrap', icon: 'view_quilt',
        submenu: [{
          id: 'start', name: 'start', icon: 'view_quilt', link: '/features/bootstrap'
        }]
      },
      {
        id: 'table', name: 'table', icon: 'view_quilt',
        submenu: [
          { id: 'documentation', name: 'Documentation', icon: 'view_quilt', link: '/features/table/documentation' },
          { id: 'virtual', name: '10k Rows', icon: 'view_quilt', link: '/features/table/virtual' },
          { id: 'selection-chkbox', name: 'Checkbox', icon: 'view_quilt', link: '/features/table/selection-chkbox' },
          { id: 'sorting-client', name: 'Client-side Sorting', icon: 'view_quilt', link: '/features/table/sorting-client' },
          { id: 'contextmenu', name: 'Context Menu', icon: 'view_quilt', link: '/features/table/contextmenu' },
          { id: 'css', name: 'CSS Classes', icon: 'view_quilt', link: '/features/table/css' },
          { id: 'filter', name: 'Filtering', icon: 'view_quilt', link: '/features/table/filter' },
          { id: 'footer', name: 'Footer Template', icon: 'view_quilt', link: '/features/table/footer' },
          { id: 'template-dom', name: 'Inline', icon: 'view_quilt', link: '/features/table/template-dom' },
          { id: 'selection-multi-click', name: 'Multi Click Row', icon: 'view_quilt', link: '/features/table/selection-multi-click' },
          { id: 'responsive', name: 'Responsive', icon: 'view_quilt', link: '/features/table/responsive' },
          { id: 'row-detail', name: 'Row Detail', icon: 'view_quilt', link: '/features/table/row-detail' },
          { id: 'row-grouping', name: 'Row Grouping', icon: 'view_quilt', link: '/features/table/row-grouping' },
          { id: 'selection-single', name: 'Single Row', icon: 'view_quilt', link: '/features/table/selection-single' },
          { id: 'column-toggle', name: 'Toggling', icon: 'view_quilt', link: '/features/table/column-toggle' },
          { id: 'paging-virtual', name: 'Virtual server-side', icon: 'view_quilt', link: '/features/table/paging-virtual' }
        ]
      },
      {
        id: 'tree', name: 'tree', icon: 'view_quilt',
        submenu: [{
          id: 'tree1', name: 'tree1', icon: 'view_quilt', link: '/features/tree1'
        }]
      }
    ]
  });
};
@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PageModule,
    FormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    TopCommonModule,
    ReactiveFormsModule,
    //DynamicFormsBootstrapUIModule,
    MarkdownModule,
    NgxDatatableModule,
    TreeModule,
    ToasterModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsMaterialUIModule,
    DynamicFormsBootstrapUIModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [
    ForminputComponent,
    FlexlayoutComponent,
    FloatComponent,
    MarkdComponent,
    BootstrapStartComponent,
    //DycformComponent,
    Select2DemoComponent,
    VirtualComponent,
    FilterComponent,
    RowGroupingComponent,
    RowDetailComponent,
    SelectionSingleComponent,
    SelectionMultiClickComponent,
    SelectionChkboxComponent,
    TemplateDomComponent,
    ColumnToggleComponent,
    SortingClientComponent,
    DocumentationComponent,
    ContextmenuComponent,
    FooterComponent,
    CssComponent,
    ResponsiveComponent,
    PagingVirtualComponent,
    Tree1Component,
    ToasterComponent,
    ModalDialogComponent,
    DcyMatFormComponent,
    DcyBootFormComponent
  ],
  providers: [
    MarkdownService,
    {
      provide: NG_VALIDATORS,
      useValue: customValidator,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: customDateRangeValidator,
      multi: true
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: customAsyncFormGroupValidator,
      multi: true
    },
    {
      provide: DYNAMIC_VALIDATORS,
      useValue: new Map<string, Validator | ValidatorFactory>([
        ["customValidator", customValidator],
        ["customDateRangeValidator", customDateRangeValidator],
        ["customForbiddenValidator", customForbiddenValidator],
        ["customAsyncFormGroupValidator", customAsyncFormGroupValidator]
      ])
    }
  ]
})

export class FeaturesModule { }
