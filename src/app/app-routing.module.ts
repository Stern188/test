/**
 * Created by conan on 2017/6/10.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./login/auth-guard.service";
import { AppComponent } from "./app.component";
/*插件开始 */
import { BootstrapComponent } from './plugin-demo/bootstrap/bootstrap.component';
import { ButtonComponent } from './plugin-demo/button/button.component';
import { CheckboxComponent } from './plugin-demo/checkbox/checkbox.component';
import { ExpansionPanelComponent } from './plugin-demo/expansion-panel/expansion-panel.component';
import { Select2Component } from './plugin-demo/select2/select2.component';
import { FlexlayoutComponent } from './plugin-demo/flexlayout/flexlayout.component';
import { FloatComponent } from "./plugin-demo/float/float.component";
import { LaydateComponent } from './plugin-demo/laydate/laydate.component';
import { MarkdownComponent } from './plugin-demo/markdown/markdown.component';
import { ModalDialogComponent } from './plugin-demo/modal-dialog/modal-dialog.component';
import { ProgressSpinnerComponent } from './plugin-demo/progress-spinner/progress-spinner.component';
import { TabComponent } from './plugin-demo/tab/tab.component';
import { ToasterComponent } from './plugin-demo/toaster/toaster.component';
import { TutorialComponent } from './plugin-demo/tutorial/tutorial.component';
import { FormComponent } from './plugin-demo/form/form.component';
import { DateGroupComponent } from './plugin-demo/date-group/date-group.component';
import { ModalComponent } from './plugin-demo/modal/modal.component';
import { DycFormComponent } from './plugin-demo/dycform/dycform.component';
/*插件结束 */
const routes: Routes = [
  { path: '', redirectTo: '/index/index', canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'index', loadChildren: 'app/page/index/index.module#IndexModule' },
  { path: 'usermanage', loadChildren: 'app/page/user-manage/usermanage.module#UserManageModule' },
  { path: 'projects', loadChildren: 'app/page/projects/projects.module#ProjectsModule' },
  { path: 'versions', loadChildren: 'app/page/versions/versions.module#VersionsModule' },
  /*插件开始 */
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'plugindemo', loadChildren: 'app/plugin-demo/plugindemo.module#PluginDemoModule' },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'form', component: FormComponent },
  { path: 'select2', component: Select2Component },
  { path: 'flexlayout', component: FlexlayoutComponent },
  { path: 'float', component: FloatComponent },
  { path: 'laydate', component: LaydateComponent },
  { path: 'markdown', component: MarkdownComponent },
  { path: 'modal-dialog', component: ModalDialogComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'tab', component: TabComponent },
  { path: 'toaster', component: ToasterComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'date-group', component: DateGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'dynamic-form', component: DycFormComponent },
  /*插件结束 */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
