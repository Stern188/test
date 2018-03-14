/**
 * Created by conan on 7/17/2017.
 */
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects/projects.component";
import { VersionsComponent } from './versions/versions.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'versions', component: VersionsComponent },
    { path: 'modules', component: ModulesComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectmanageRoutingModule {

}
