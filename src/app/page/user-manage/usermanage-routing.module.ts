/**
 * Created by conan on 7/17/2017.
 */
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MembersComponent } from "./members/members.component";
import { PersonalsettingsComponent } from './personalsettings/personalsettings.component'
import { RoleManageComponent } from './role-manage/role-manage.component'


const routes: Routes = [
    { path: 'members', component: MembersComponent },
    { path: 'role-manage', component: RoleManageComponent },
    { path: 'personalsettings', component: PersonalsettingsComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsermanageRoutingModule {

}
