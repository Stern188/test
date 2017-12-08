/**
 * Created by conan on 7/17/2017.
 */
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PlugindemoComponent } from './plugindemo.component';

const routes: Routes = [
    { path: 'plugindemo', component: PlugindemoComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PluginsRoutingModule {

}
