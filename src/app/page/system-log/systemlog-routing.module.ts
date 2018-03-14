/**
 * Created by conan on 7/17/2017.
 */
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SelfTestRecordsComponent } from './self-test-records/self-test-records.component';
import { OperationLogComponent } from "./operation-log/operation-log.component";
// import { OperationLogListComponent } from './operation-log-list/operation-log-list.component'


const routes: Routes = [
    { path: 'self-test-records', component: SelfTestRecordsComponent },
    { path: 'operation-log', component: OperationLogComponent },
];
export let SystemLogModuleAddMenu = (navbar) => {
    navbar.add_menu({
      id: 'systemlogMenu', submenu: [
        {
          id: 'system-log', name: '系统日志', icon: 'input',
          submenu: [
            { id: 'self-test-records', name: '我的自测记录', icon: 'input', link: '/systemlog/self-test-records' },
            { id: 'operation-log', name: '操作日志', icon: 'input', link: '/systemlog/operation-log' },
          ]
        }
      ]
    });
};
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemLogRoutingModule {

}
