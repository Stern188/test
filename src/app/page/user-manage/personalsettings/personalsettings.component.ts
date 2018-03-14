import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { AppSettings } from "../../../app.settings";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
// import { Modal } from "ngx-modialog/plugins/vex";
import { ToasterService, ToasterConfig } from 'angular2-toaster';
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
//  import { BOOTSTRAP_SAMPLE_FORM_MODEL } from "./bootstrap-sample-form.model";
import { MATERIAL_SAMPLE_FORM_LAYOUT } from "../../../features/dcy-mat-form/material-sample-form.layout";
import { of } from "rxjs/observable/of";
@Component({
  selector: 'app-personalsettings',
  providers: [ToasterService, CommonService],
  templateUrl: './personalsettings.component.html',
  styleUrls: ['./personalsettings.component.scss']
})
export class PersonalsettingsComponent implements OnInit {
  MATERIAL_SAMPLE_FORM_MODEL = [
    new DynamicFormGroupModel({
      id: "passwordReset",
      group: [
          new DynamicInputModel({
              id: "oldPass",
              placeholder: "输入原始密码",
              validators: {
                required: null
              },
              errorMessages: {
                required: "必填项"
              }
          }),
          new DynamicInputModel({
            id: "newPass",
            placeholder: "请输入新密码",
            validators: {
              required: null
            },
            errorMessages: {
              required: "必填项"
            }
          }),
          new DynamicInputModel({
            id: "newPassagain",
            placeholder: "重复输入密码",
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
  formModel: DynamicFormControlModel[] = this.MATERIAL_SAMPLE_FORM_MODEL;
  formLayout: DynamicFormLayout = MATERIAL_SAMPLE_FORM_LAYOUT;
  formGroup: FormGroup;
  temp = [];
  private _membersUrl = `${AppSettings.env_vars.API_URL}/personalsettings`;
  constructor(private toasterService: ToasterService, private formService: DynamicFormService,/* public modal: Modal, */ private commonService: CommonService) {}


  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }
}

