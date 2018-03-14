import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';//引入ng公共库中相关模块
import { AppSettings } from "../../../app.settings";//引入系统配置
import { overlayConfigFactory } from "ngx-modialog";//引入模态框相关模块
import { VEXModalContext, Modal } from "ngx-modialog/plugins/vex";//引入模态框相关模块
import { ToasterService } from 'angular2-toaster';//引入消息提示框相关模块
import { CommonService } from '../../../common/common.service';//引入可调用的公共服务
import { CommonComponent } from '../../../common/common.component';//引入可调用的公共方法
import { FormGroup } from "@angular/forms";//引入表单相关模块
import { MODULES_FORM_MODEL } from "./modules-form.model";//引入项目编辑表单控件
import {
  DynamicFormService,
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicInputModel,
  DynamicSelectModel
} from "@ng-dynamic-forms/core";//引入表单相关模块

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  newRows: any = [];//存放表格中后台最新的数据，用来给搜索使用
  rows: any = [];//表格实际显示的数据
  private modulesUrl = `${AppSettings.env_vars.API_URL}/project-manage/modules`;//用来获取项目数据的接口
  @ViewChild('modTemp') public modTemp: TemplateRef<any>;
  ajaxType: string;//定义ajax标识ajaxType=post(添加)；ajaxType=put(修改)
  modGroup: FormGroup;//定义modGroup变量为FormGroup类型,方便表单引用
  isModuleDisabled: boolean;//定义项目名称是否可填
  addOrUpldModTitle: string;//定义modialog头部title变量
  module: object = {};//表单取值对象
  modModel: DynamicFormControlModel[] = MODULES_FORM_MODEL;//获取项目编辑表单控件
  columns = [
    { name: '版本号', title: "version" },
    { name: '项目名称', title: "name" },
    { name: '父模块', title: "parent_module" },
    { name: '子模块', title: "submodule" },
    { name: '负责人', title: "person" },
    { name: '操作时间', title: "operate_time" }
  ];//表格表头
  allColumns = [
    { name: '版本号', title: "version" },
    { name: '项目名称', title: "name" },
    { name: '父模块', title: "parent_module" },
    { name: '子模块', title: "submodule" },
    { name: '负责人', title: "person" },
    { name: '操作时间', title: "operate_time" },
    { name: '描述', title: "description", isHidden: true }
  ];//自定义列列表
  /* 自定义列中点击复选框事件 */
  toggle(col) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }
  /* 自定义列里面复选框是否默认选中 */
  isChecked(col) {
    return this.columns.find(c => {
      return c.name === col.name;
    });
  }
  constructor(private formService: DynamicFormService, private commonService: CommonService, private commonComponent: CommonComponent, private toasterService: ToasterService, private modal: Modal) {
    this.getModules();//调用获取版本号数据的方法
  }

  ngOnInit() {
    this.modGroup = this.formService.createFormGroup(this.modModel);//传入控件model创建角色表单
  }

  /* 获取版本号数据的方法 */
  getModules(): void {
    this.commonService
      .get(this.modulesUrl)
      .subscribe(res => {
        this.rows = res;
        this.newRows = res;
      });
  }
  /* 添加版本号之前执行的方法 */
  befAddMod() {
    //设置弹框title
    this.addOrUpldModTitle = "添加";
    //重置表单
    /* this.set("choosetype", '');//是否全选下拉
    this.set("roleModel", {});
    $('input:checkbox[value=r],input:checkbox[value=rw]').attr('checked', false); */
    //设置标识ajaxType=post(添加)；ajaxType=put(修改)
    this.ajaxType = 'post';
    //使版本号可修改
    this.isModuleDisabled = false;
    //弹出modialog
    this.modal.open(this.modTemp, overlayConfigFactory({ "closeClassName": "vex-close", "contentClassName": "vex-content w700", "className": "default", isBlocking: true }, VEXModalContext));
  }
  /* 版本号保存和修改 */
  addOrUplMod() {
    if (this.module['name']) {
      this.commonService.update(`${this.modulesUrl}/${this.module['name']}`, this.module)
        .subscribe(
        () => this.toasterService.pop('success', '', '更新成功'),
        err => this.toasterService.pop('error', '', '更新失败')
        );
    } else {
      if (this.rows.filter(data => data === this.module['name']).length) {
        this.toasterService.pop('warning', '', '已存在该角色');
        return;
      }
      this.commonService.create(this.modulesUrl, this.module)
        .subscribe(
        () => this.toasterService.pop('success', '', '提交成功'),
        err => this.toasterService.pop('error', '', '提交失败')
        );
    }
  }
  /*修改版本号前执行的方法 */
  befEditMod(row) {
    //设置弹框title
    this.addOrUpldModTitle = "编辑";
    //给表单赋值
    /* this.send("getPrvgCm", record.privilege_map);
    this.set("choosetype", '');//是否全选下拉
    this.set('roleModel', A(record).getProperties('map_name', 'comment')); */
    //设置标识ajaxType=post(添加)；ajaxType=put(修改)
    this.ajaxType = 'put';
    //显示弹出框
    this.modal.open(this.modTemp, overlayConfigFactory({ "closeClassName": "vex-close", "contentClassName": "vex-content w700", "className": "default", isBlocking: true }, VEXModalContext));
    //使角色名称不可修改
    this.isModuleDisabled = true;
  }
  /* 版本号删除 */
  delMod(rowIndex: number) {
    this.modal.confirm()
      .isBlocking(true)
      .message('是否确定删除？')
      .okBtn('确定')
      .cancelBtn('取消')
      .open().then(dialogRef => {
        dialogRef.result.then(result => {
          this.commonService
            .delete(`${this.modulesUrl}/${this.rows[rowIndex].id}`)
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
}
