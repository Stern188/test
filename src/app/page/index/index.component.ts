import { Component, OnInit } from '@angular/core';
import { AppSettings } from "../../app.settings";
import { overlayConfigFactory } from "ngx-modialog";
import { VEXModalContext, Modal } from "ngx-modialog/plugins/vex";
import { ToasterService } from 'angular2-toaster';
import { CommonService } from '../../common/common.service';
import { CommonComponent } from '../../common/common.component'
import { FormGroup } from "@angular/forms";
import {
  DynamicFormService,
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicInputModel,
  DynamicSelectModel
} from "@ng-dynamic-forms/core";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  roleNewRows: any = [];//存放表格中后台最新的数据，用来给搜索使用
  roleRows: any = [];//表格实际显示的数据
  private rolesUrl = `${AppSettings.env_vars.API_URL}/index`;//用来获数据的接口

  constructor(private formService: DynamicFormService, private commonService: CommonService, private commonComponent: CommonComponent, private toasterService: ToasterService, private modal: Modal) {
    this.getDatas();//调用获取角色和权限模块数据的方法
  }

  ngOnInit() { }

  getDatas(): void {
    this.commonService
      .get(this.rolesUrl)
      .subscribe(res => {
        this.roleRows = res;
        this.roleNewRows = res;
      });
  }

  /* 提交前的modal框提示 */
  befAddRole() {
    
  }
}
