/**
 * Created by conan on 2017/6/10.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./login/auth-guard.service";
import { AppComponent } from "./app.component";
const routes: Routes = [
  { path: '', redirectTo: '/index/index', canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'index', loadChildren: 'app/page/index/index.module#IndexModule' },
  { path: 'usermanage', loadChildren: 'app/page/user-manage/usermanage.module#UserManageModule' },
  { path: 'systemlog', loadChildren: 'app/page/system-log/systemlog.module#SystemLogModule' },
  { path: 'projectmanage', loadChildren: 'app/page/project-manage/projectmanage.module#ProjectManageModule' },
  /*插件开始 */
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'features', loadChildren: 'app/features/features.module#FeaturesModule' },
  { path: 'chart-demo', loadChildren: 'app/chart-demo/chart-demo.module#ChartDemoModule' },
  { path: 'tutorial', loadChildren: 'app/tutorial/tutorial.module#TutorialModule' }
  /*插件结束 */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
