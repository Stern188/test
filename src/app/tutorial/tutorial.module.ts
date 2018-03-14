import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TStartComponent } from './tstart/tstart.component';
import { TLoginComponent } from './tlogin/tlogin.component';
import {TutorialRoutingModule} from "./tutorial-routing.module";
import {MarkdownModule} from "angular2-markdown";


export let TutorialModuleAddMenu=(navbar)=>{
  navbar.add_menu({
    id:'TUTORIAL',submenu:[
      {
        id: 'tutorial', name: 'Tutorial', icon: 'view_quilt',
        submenu: [

          {id: 'tstart', name: 'start', link: '/tutorial/tstart', icon: 'input'},
          {id: 'tlogin', name: 'login', link: '/tutorial/tlogin', icon: 'input'}
        ]
      }
    ]
  });
};

@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
    MarkdownModule
  ],
  declarations: [TStartComponent, TLoginComponent]
})
export class TutorialModule { }
