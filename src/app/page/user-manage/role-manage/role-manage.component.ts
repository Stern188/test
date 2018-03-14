import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';//引入ng公共库中相关模块
import { AppSettings } from "../../../app.settings";//引入系统配置
import { overlayConfigFactory } from "ngx-modialog";//引入模态框相关模块
import { VEXModalContext, Modal } from "ngx-modialog/plugins/vex";//引入模态框相关模块
import { ToasterService } from 'angular2-toaster';//引入消息提示框相关模块
import { CommonService } from '../../../common/common.service';//引入可调用的公共服务
import { CommonComponent } from '../../../common/common.component';//引入可调用的公共方法
import { FormGroup } from "@angular/forms";//引入表单相关模块
import {
  DynamicFormService,
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicInputModel,
  DynamicSelectModel
} from "@ng-dynamic-forms/core";//引入表单相关模块
import { IS_SELECT_FORM_MODEL } from "./role-manage-form.model";//引入是否全选权限下拉表单控件
import { ROLE_MANAGE_FORM_LAYOUT } from "./role-manage-form.layout";//引入表单布局

@Component({
  selector: 'app-role-manage',
  templateUrl: './role-manage.component.html',
  styleUrls: ['./role-manage.component.scss']
})
export class RoleManageComponent implements OnInit {
  newRows: any = [];//存放表格中后台最新的数据，用来给搜索使用
  rows: any = [];//表格实际显示的数据
  priRows: any = [];//权限模块表格实际显示的数据
  role: object = {};//表单取值对象
  isFooter: boolean;//定义是否显示modialog底部按钮变量
  addOrUpldRoleTitle: string;//定义modialog头部title变量
  ajaxType: string;//定义ajax标识ajaxType=post(添加)；ajaxType=put(修改)
  isRolenameDisabled: boolean;//定义角色管理表单是否可填
  isChkDisabled: boolean;//定义复选框是否可点
  isHide: string;//定义是否显示角色表单
  private rolesUrl = `${AppSettings.env_vars.API_URL}/ceshi`;//用来获取角色的接口
  private rolesPriUrl = `${AppSettings.env_vars.API_URL}/user-manage/role-privilege`;//用来获取权限模块的接口
  @ViewChild('roleTemp') public roleTemp: TemplateRef<any>;
  roleModel: DynamicFormControlModel[] = [
    new DynamicInputModel({

      id: "roletName",
      placeholder: "角色名称",
      validators: {
        required: null
      },
      disabled: this.isRolenameDisabled,
      errorMessages: {
        required: "必填项"
      }
    }),

    new DynamicInputModel({

      id: "description",
      placeholder: "描述"
    })
  ];//初始化角色表单控件
  isSelectModel: DynamicFormControlModel[] = IS_SELECT_FORM_MODEL;//获取是否全选下拉表单控件
  roleGroup: FormGroup;//定义roleGroup变量为FormGroup类型,方便角色表单引用
  isSelectGroup: FormGroup;//定义isSelectGroup变量为isSelectGroup类型，方便是否全选下拉表单引用
  formLayout: DynamicFormLayout = ROLE_MANAGE_FORM_LAYOUT;//获取表单布局

  constructor(private formService: DynamicFormService, private commonService: CommonService, private commonComponent: CommonComponent, private toasterService: ToasterService, private modal: Modal) {
    this.getRoles();//调用获取角色和权限模块数据的方法
  }

  ngOnInit() {
    this.roleGroup = this.formService.createFormGroup(this.roleModel);//传入控件model创建角色表单
    this.isSelectGroup = this.formService.createFormGroup(this.isSelectModel);//传入是否全选下拉控model创建角色表单
  }
  /* 是否全选监听事件 */
  isSelectChg($event) {
    let chkarr = $(`#privilegeTbl input:checkbox[value=${$event.model.value}]`);
    let unchkarr = $(`#privilegeTbl input:checkbox[value!=${$event.model.value}]`);
    for (let i = 0; i < chkarr.length; i++) {
      chkarr[i]['checked'] = true;
    }
    for (let i = 0; i < unchkarr.length; i++) {
      unchkarr[i]['checked'] = false;
    }
  }

  /* 复选框触发事件 使同一权限模块不能同时选择只读和读写复选框*/
  chgRdo(unChkVal, priId) {
    $("#privilegeTbl input:checkbox[value=" + unChkVal + "][priId=" + priId + "]").prop('checked', false);
  }
  /* 获取角色和权限模块数据的方法 */
  getRoles(): void {
    this.commonService
      .get(this.rolesUrl)
      .subscribe(res => {
        this.rows = res;
        this.newRows = res;
      });
    this.commonService
      .get(this.rolesPriUrl)
      .subscribe(res => {
        this.priRows = res;
      });
    /*  let roles$ = this.commonService.get(this.rolesUrl);
     let pri$ = this.commonService.get(this.rolesPriUrl);
     Observable.forkJoin([roles$, pri$]).subscribe(
       res => {
         debugger;
         this.rows = res[0];
         this.roleOldRows = res[0];
         this.priRows = res[1];
       }
     ); */
  }

  /* 添加角色权限之前执行的方法 */
  befAddRole() {
    //显示底部按钮
    this.isFooter = true;
    //设置弹框title
    this.addOrUpldRoleTitle = "添加";
    //重置表单
    /* this.set("choosetype", '');//是否全选下拉
    this.set("roleModel", {});
    $('input:checkbox[value=r],input:checkbox[value=rw]').attr('checked', false); */
    //设置标识ajaxType=post(添加)；ajaxType=put(修改)
    this.ajaxType = 'post';
    //使角色名称可修改
    this.isRolenameDisabled = false;
    //使角色名称、描述、是否全选显示
    this.isHide = "";
    //设置表格中复选框可点
    this.isChkDisabled = false;
    //弹出modialog
    this.modal.open(this.roleTemp, overlayConfigFactory({ "closeClassName": "vex-close", "contentClassName": "vex-content w700", "className": "top", isBlocking: true }, VEXModalContext));
  }

  /*修改角色权限前执行的方法 */
  befEditRole(row) {
    //显示底部按钮
    this.isFooter = true;
    //设置弹框title
    this.addOrUpldRoleTitle = "编辑";
    //给表单赋值
    /* this.send("getPrvgCm", record.privilege_map);
    this.set("choosetype", '');//是否全选下拉
    this.set('roleModel', A(record).getProperties('map_name', 'comment')); */
    //设置标识ajaxType=post(添加)；ajaxType=put(修改)
    this.ajaxType = 'put';
    //显示弹出框
    this.modal.open(this.roleTemp, overlayConfigFactory({ "closeClassName": "vex-close", "contentClassName": "vex-content w700", "className": "top", isBlocking: true }, VEXModalContext));
    //使角色名称不可修改
    this.isRolenameDisabled = true;
    //使角色名称、描述、是否全选显示
    this.isHide = "";
    //设置表格中复选框可点
    this.isChkDisabled = false;
  }
  onMatEvent($event) {
    console.log(`Material ${$event.type} event on: ${$event.model.id}: `, $event);
  }
  //查看详情执行的方法
  roleDet(record) {
    //隐藏底部按钮
    this.isFooter = false;
    //弹出详情框
    this.modal.open(this.roleTemp, overlayConfigFactory({ "closeClassName": "vex-close", "contentClassName": "vex-content w700", "className": "default", isBlocking: false }, VEXModalContext));
    //使角色名称、描述、是否全选隐藏
    this.isHide = "hide";
    //设置表格中复选框不可点
    this.isChkDisabled = true;
    //为复选框赋值
    // this.send("getPrvgCm", record.privilege_map);
  }

  /* 角色权限保存和修改 */
  addOrUplRole() {
    if (this.role['name']) {
      this.commonService.update(`${this.rolesUrl}/${this.role['name']}`, this.role)
        .subscribe(
          () => this.toasterService.pop('success', '', '更新成功'),
          err => this.toasterService.pop('error', '', '更新失败')
        );
    } else {
      if (this.rows.filter(data => data === this.role['name']).length) {
        this.toasterService.pop('warning', '', '已存在该角色');
        return;
      }
      this.commonService.create(this.rolesUrl, this.role)
        .subscribe(
          () => this.toasterService.pop('success', '', '提交成功'),
          err => this.toasterService.pop('error', '', '提交失败')
        );
    }
  }

  /* 角色权限删除 */
  delRole(rowIndex: number) {
    this.modal.confirm()
      .isBlocking(true)
      .message('是否确定删除？')
      .okBtn('确定')
      .cancelBtn('取消')
      .open().then(dialogRef => {
        dialogRef.result.then(result => {
          this.commonService
            .delete(`${this.rolesUrl}/${this.rows[rowIndex].id}`)
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
