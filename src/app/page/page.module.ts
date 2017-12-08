import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";
import { ToasterModule } from 'angular2-toaster';
import { PageBarComponent } from "./page-bar/page-bar.component";
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ToasterModule
  ],
  exports: [PageBarComponent, PageTitleComponent],
  declarations: [PageBarComponent, PageTitleComponent],
  providers: []
})
export class PageModule { }
