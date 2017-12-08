import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsRoutingModule } from "./plugindemo-routing.module";
import { PlugindemoComponent } from './plugindemo.component';

export let PluginDemoModuleAddMenu = (navbar) => {
  navbar.add_menu({
    id: 'PLUGINDEMO', submenu: [
      {
        id: 'plugindemo', name: '插件管理', icon: 'input', link: '/plugindemo/plugindemo'
      }
    ]
  });
};

@NgModule({
  imports: [
    CommonModule,
    PluginsRoutingModule,
  ],
  declarations: [PlugindemoComponent],
  providers: []
})


export class PluginDemoModule {
}
