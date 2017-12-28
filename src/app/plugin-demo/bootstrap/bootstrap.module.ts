import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsRoutingModule } from "../plugindemo-routing.module";
import { PluginDemoModule } from '../plugindemo.module';
import { PlugindemoComponent } from '../plugindemo.component';

@NgModule({
  imports: [
    CommonModule,
    PluginsRoutingModule,
    PluginDemoModule
  ],
  declarations: [PlugindemoComponent],
  providers: []
})

export class BootstrapModule {
}
