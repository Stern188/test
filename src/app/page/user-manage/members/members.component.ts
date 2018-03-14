import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
// import { MatSnackBar } from "@angular/material";
import { FormGroup, FormControl, FormArray  } from "@angular/forms";
import { CommonComponent } from '../../../common/common.component'
import { 
  DynamicFormArrayModel,
  DynamicFormService, 
  DynamicFormControlModel, 
  DynamicFormLayout,
  DynamicCheckboxModel,
  DynamicDatePickerModel,
  DynamicFormGroupModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicSelectModel,
  DynamicSwitchModel,
  DynamicTextAreaModel,
  DynamicCheckboxGroupModel,
  DynamicSliderModel} from "@ng-dynamic-forms/core";
import { overlayConfigFactory } from "ngx-modialog";
import { VEXModalContext, Modal } from "ngx-modialog/plugins/vex";
import { CommonService } from '../../../common/common.service';
import { ToasterService } from 'angular2-toaster';
import { DomSanitizer } from '@angular/platform-browser';




// import { BOOTSTRAP_SAMPLE_FORM_MODEL } from "./bootstrap-sample-form.model";
import { MATERIAL_SAMPLE_FORM_LAYOUT } from "../../../features/dcy-mat-form/material-sample-form.layout";





import { AppSettings } from "../../../app.settings";
// import { of } from "rxjs/observable/of";
import { Overlay } from 'ngx-modialog';
// import { Modal } from "ngx-modialog/plugins/bootstrap";
// import { MATERIAL_SAMPLE_FORM_MODEL } from "../usermanage.module";
//  import { MATERIAL_SAMPLE_FORM_LAYOUT } from "../material-sample-form.layout";
class Bind1 {
  val: string;
};
@Component({
  selector: 'app-members',
  providers: [CommonComponent],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  MATERIAL_SAMPLE_FORM_MODEL = [
    new DynamicFormGroupModel({
      id: "room",
      group: [
          new DynamicInputModel({
              id: "name",
              placeholder: "用户名",
              validators: {
                required: null
              },
              errorMessages: {
                required: "必填项"
              }
          }),
          new DynamicInputModel({
            id: "description",
            placeholder: "描述",
        }),
        new DynamicSelectModel<string>({

          id: "type",
          placeholder: "用户类型",
          options: [
              {
                  label: "管理员",
                  value: "adminUser"
              },
              {
                  label: "普通用户",
                  value: "peopleUser"
              }
          ],
          validators: {
            required: null
          },
          errorMessages: {
            required: "必填项"
          }
      }),
      ]
  }),
];
  // formModel: DynamicFormControlModel[] = MATERIAL_SAMPLE_FORM_MODEL;
  formModel: DynamicFormControlModel[] = this.MATERIAL_SAMPLE_FORM_MODEL;
  formLayout: DynamicFormLayout = MATERIAL_SAMPLE_FORM_LAYOUT;
  formGroup: FormGroup;
  temp = [];
  constructor(private toasterService: ToasterService,private commonService: CommonService,private sanitizer: DomSanitizer, private formService: DynamicFormService, private commonComponent: CommonComponent,public modal: Modal) {
    this.temp = this.rows;
  }
  //我也不知道为什么，直接从官网copy下来的 还没研究
  private rolesurl = `${AppSettings.env_vars.API_URL}/user-manage/members-manage`;
  @ViewChild('membersTemp') public membersTemp: TemplateRef<any>;
  // @ViewChild('membersTemp') public membersTemp1: TemplateRef<any>;
  DeleteUser(rowIndex) {
    this.rows = this.rows.filter(h => h !== this.rows[rowIndex]);
  }
  EditUser(row) {debugger
    console.log('触发了编辑' + row.name + '这条的方法');
    console.log(row);
    this.formGroup.value.room=row;
    console.log(this.formGroup.value.room);
    this.modal.open(this.membersTemp, overlayConfigFactory({ "closeClassName": "vex-close", isBlocking: true}, VEXModalContext));
  }
  disabledUser(row) {
    console.log('强制' + row.username + '下线');
  }
  beforeaddSubmit() {
    this.modal.open(this.membersTemp, overlayConfigFactory({ "closeClassName": "vex-close", isBlocking: true}, VEXModalContext));
  }

  addmember() {debugger
    
    if (this.rows['name']) {
      this.commonService.update(`${this.rolesurl}/${this.rows['name']}`, this.rows)
        .subscribe(
        () => this.toasterService.pop('success', '', '更新成功'),
        err => this.toasterService.pop('error', '', '更新失败')
        );
    } else {
      if (this.rows.filter(data => data === this.rows['name']).length) {
        this.toasterService.pop('warning', '', '已存在该用户');
        return;
      }
      this.commonService.create(this.rolesurl, this.rows)
        .subscribe(
        () => this.toasterService.pop('success', '', '提交成功'),
        err => this.toasterService.pop('error', '', '提交失败')
        );
    }
  } 



  exampleControl: FormControl;
  exampleModel: DynamicInputModel;
  arrayControl: FormArray;
  arrayModel: DynamicFormArrayModel;
  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }
  rows = [{
    'name': "崔师尊",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "王未",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "窦莎莎",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "吴曦明",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "崔师尊",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "王未",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "窦莎莎",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "吴曦明",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "崔师尊",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "王未",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "窦莎莎",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "吴曦明",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "崔师尊",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "王未",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "窦莎莎",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "吴曦明",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "崔师尊",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "王未",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "窦莎莎",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }, {
    'name': "吴曦明",
    'type': "管理员",
    'description': "管理员权限",
    'operation': "",
  }]
  rowsatuo = [{
    'username': "吴曦明",
    'ip': "192.168.18.92",
    'time': "123",
    'onlinetime': "45",
    'method': "管理员登陆测试",
    'autooperation': "",

  }]
}


