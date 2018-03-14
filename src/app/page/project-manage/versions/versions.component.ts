import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';//引入ng公共库中相关模块
import { AppSettings } from "../../../app.settings";//引入系统配置
import { overlayConfigFactory } from "ngx-modialog";//引入模态框相关模块
import { VEXModalContext, Modal } from "ngx-modialog/plugins/vex";//引入模态框相关模块
import { ToasterService } from 'angular2-toaster';//引入消息提示框相关模块
import { CommonService } from '../../../common/common.service';//引入可调用的公共服务
import { CommonComponent } from '../../../common/common.component';//引入可调用的公共方法
import { FormGroup } from "@angular/forms";//引入表单相关模块
import { VERSION_FORM_MODEL } from "./versions-form.model";//引入项目编辑表单控件
import {
  DynamicFormService,
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicInputModel,
  DynamicSelectModel
} from "@ng-dynamic-forms/core";//引入表单相关模块

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {
  newRows: any = [];//存放表格中后台最新的数据，用来给搜索使用
  rows: any = [];//表格实际显示的数据
  private versionsUrl = `${AppSettings.env_vars.API_URL}/project-manage/versions`;//用来获取项目数据的接口
  @ViewChild('verTemp') public verTemp: TemplateRef<any>;
  ajaxType: string;//定义ajax标识ajaxType=post(添加)；ajaxType=put(修改)
  verGroup: FormGroup;//定义verGroup变量为FormGroup类型,方便表单引用
  isVersionDisabled: boolean;//定义项目名称是否可填
  addOrUpldVerTitle: string;//定义modialog头部title变量
  version: object = {};//表单取值对象
  verModel: DynamicFormControlModel[] = VERSION_FORM_MODEL;//获取项目编辑表单控件

  constructor(private formService: DynamicFormService, private commonService: CommonService, private commonComponent: CommonComponent, private toasterService: ToasterService, private modal: Modal) {
    this.getVersions();//调用获取版本号数据的方法
  }

  ngOnInit() {
    this.verGroup = this.formService.createFormGroup(this.verModel);//传入控件model创建角色表单
  }

  /* 获取版本号数据的方法 */
  getVersions(): void {
    this.commonService
      .get(this.versionsUrl)
      .subscribe(res => {
        this.rows = res;
        this.newRows = res;
      });
  }
  /* 添加版本号之前执行的方法 */
  befAddVer() {
    //设置弹框title
    this.addOrUpldVerTitle = "添加";
    //重置表单
    /* this.set("choosetype", '');//是否全选下拉
    this.set("roleModel", {});
    $('input:checkbox[value=r],input:checkbox[value=rw]').attr('checked', false); */
    //设置标识ajaxType=post(添加)；ajaxType=put(修改)
    this.ajaxType = 'post';
    //使版本号可修改
    this.isVersionDisabled = false;
    //弹出modialog
    this.modal.open(this.verTemp, overlayConfigFactory({ "closeClassName": "vex-close", "contentClassName": "vex-content w700", "className": "default", isBlocking: true }, VEXModalContext));
  }
  /* 版本号保存和修改 */
  addOrUplVer() {
    if (this.version['name']) {
      this.commonService.update(`${this.versionsUrl}/${this.version['name']}`, this.version)
        .subscribe(
        () => this.toasterService.pop('success', '', '更新成功'),
        err => this.toasterService.pop('error', '', '更新失败')
        );
    } else {
      if (this.rows.filter(data => data === this.version['name']).length) {
        this.toasterService.pop('warning', '', '已存在该角色');
        return;
      }
      this.commonService.create(this.versionsUrl, this.version)
        .subscribe(
        () => this.toasterService.pop('success', '', '提交成功'),
        err => this.toasterService.pop('error', '', '提交失败')
        );
    }
  }
  /*修改版本号前执行的方法 */
  befEditVer(row) {
    //设置弹框title
    this.addOrUpldVerTitle = "编辑";
    //给表单赋值
    /* this.send("getPrvgCm", record.privilege_map);
    this.set("choosetype", '');//是否全选下拉
    this.set('roleModel', A(record).getProperties('map_name', 'comment')); */
    //设置标识ajaxType=post(添加)；ajaxType=put(修改)
    this.ajaxType = 'put';
    //显示弹出框
    this.modal.open(this.verTemp, overlayConfigFactory({ "closeClassName": "vex-close", "contentClassName": "vex-content w700", "className": "default", isBlocking: true }, VEXModalContext));
    //使角色名称不可修改
    this.isVersionDisabled = true;
  }
  /* 版本号删除 */
  delVer(rowIndex: number) {
    this.modal.confirm()
      .isBlocking(true)
      .message('是否确定删除？')
      .okBtn('确定')
      .cancelBtn('取消')
      .open().then(dialogRef => {
        dialogRef.result.then(result => {
          this.commonService
            .delete(`${this.versionsUrl}/${this.rows[rowIndex].id}`)
            .subscribe(
            () => {
              this.rows = this.rows.filter(h => h !== this.rows[rowIndex]);
              this.toasterService.pop('success', '', '删除成功');
            },
            err => this.toasterService.pop('error', '', '删除失败')
            );
        }).catch(result => { });
      });
  }
  /* 修改状态 */
  chgStatus(status) {
    debugger;

  }
}
