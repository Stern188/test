import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DynamicFormService, DynamicFormControlModel, DynamicFormLayout } from "@ng-dynamic-forms/core";
import { MATERIAL_SAMPLE_FORM_MODEL } from "./material-sample-form.model";
import { MATERIAL_SAMPLE_FORM_LAYOUT } from "./material-sample-form.layout";

@Component({
  selector: 'app-dcy-mat-form',
  templateUrl: './dcy-mat-form.component.html',
  styleUrls: ['./dcy-mat-form.component.scss']
})
export class DcyMatFormComponent implements OnInit {

  formModel: DynamicFormControlModel[] = MATERIAL_SAMPLE_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = MATERIAL_SAMPLE_FORM_LAYOUT;

   constructor(private formService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    }

    onBlur($event) {
        console.log(`Material blur event on: ${$event.model.id}: `, $event);
    }

    onChange($event) {
        console.log(`Material change event on: ${$event.model.id}: `, $event);
    }

    onFocus($event) {
        console.log(`Material focus event on: ${$event.model.id}: `, $event);
    }

    onMatEvent($event) {
        console.log(`Material ${$event.type} event on: ${$event.model.id}: `, $event);
    }

}
