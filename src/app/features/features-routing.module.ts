import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ForminputComponent } from "./forminput/forminput.component";
import { FlexlayoutComponent } from "./flexlayout/flexlayout.component";
import { MarkdComponent } from "./markd/markd.component";
import { BootstrapStartComponent } from "./bootstrap/start.component";
//import {DycformComponent} from "./dycform/dycform.component";
import { Select2DemoComponent } from "./select2/select2-demo.component";
import { ToasterComponent } from "./toaster/toaster.component";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";
import { DcyMatFormComponent } from './dcy-mat-form/dcy-mat-form.component';
import { DcyBootFormComponent } from './dcy-boot-form/dcy-boot-form.component';
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
import { FloatComponent } from "./float/float.component";

const routes: Routes = [
  { path: 'input', component: ForminputComponent },
  { path: 'flexlayout', component: FlexlayoutComponent },
  { path: 'float', component: FloatComponent },
  { path: 'markdown', component: MarkdComponent },
  { path: 'bootstrap', component: BootstrapStartComponent },
  // { path: 'dycform',component:  DycformComponent},
  { path: 'select2', component: Select2DemoComponent },
  { path: 'toaster', component: ToasterComponent },
  { path: 'modaldialog', component: ModalDialogComponent },
  { path: 'dycmat', component: DcyMatFormComponent },
  { path: 'dycbot', component: DcyBootFormComponent },
  { path: 'table/filter', component: FilterComponent },
  { path: 'table/row-grouping', component: RowGroupingComponent },
  { path: 'table/row-detail', component: RowDetailComponent },
  { path: 'table/selection-single', component: SelectionSingleComponent },
  { path: 'table/selection-multi-click', component: SelectionMultiClickComponent },
  { path: 'table/selection-chkbox', component: SelectionChkboxComponent },
  { path: 'table/template-dom', component: TemplateDomComponent },
  { path: 'table/column-toggle', component: ColumnToggleComponent },
  { path: 'table/sorting-client', component: SortingClientComponent },
  { path: 'table/documentation', component: DocumentationComponent },
  { path: 'table/virtual', component: VirtualComponent },
  { path: 'table/contextmenu', component: ContextmenuComponent },
  { path: 'table/footer', component: FooterComponent },
  { path: 'table/css', component: CssComponent },
  { path: 'table/responsive', component: ResponsiveComponent },
  { path: 'table/paging-virtual', component: PagingVirtualComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {

}
