import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import {
    DynamicFormArrayModel,
    DynamicFormControlModel,
    DynamicFormLayout,
    DynamicFormService,
    DynamicInputModel
} from "@ng-dynamic-forms/core";
import { BOOTSTRAP_SAMPLE_FORM_MODEL } from "./bootstrap-sample-form.model";
import { BOOTSTRAP_SAMPLE_FORM_LAYOUT } from "./bootstrap-sample-form.layout";

@Component({
    selector: 'app-dcy-boot-form',
    templateUrl: './dcy-boot-form.component.html',
    styleUrls: ['./dcy-boot-form.component.scss']
})
export class DcyBootFormComponent implements OnInit {

    formModel: DynamicFormControlModel[] = BOOTSTRAP_SAMPLE_FORM_MODEL;
    formGroup: FormGroup;
    formLayout: DynamicFormLayout = BOOTSTRAP_SAMPLE_FORM_LAYOUT;

    exampleControl: FormControl;
    exampleModel: DynamicInputModel;

    arrayControl: FormArray;
    arrayModel: DynamicFormArrayModel;

    constructor(private formService: DynamicFormService) { }

    ngOnInit() {

        this.formGroup = this.formService.createFormGroup(this.formModel);

        this.exampleControl = this.formGroup.get("bootstrapFormGroup1").get("bootstrapInput") as FormControl;
        this.exampleModel = this.formService.findById("bootstrapInput", this.formModel) as DynamicInputModel;

        this.arrayControl = this.formGroup.get("bootstrapFormGroup2").get("bootstrapFormArray") as FormArray;
        this.arrayModel = this.formService.findById("bootstrapFormArray", this.formModel) as DynamicFormArrayModel;
    }

    add() {
        this.formService.addFormArrayGroup(this.arrayControl, this.arrayModel);
    }

    insert(context: DynamicFormArrayModel, index: number) {
        this.formService.insertFormArrayGroup(index, this.arrayControl, context);
        console.log(this.formModel);
    }

    remove(context: DynamicFormArrayModel, index: number) {
        this.formService.removeFormArrayGroup(index, this.arrayControl, context);
    }

    move(context: DynamicFormArrayModel, index: number, step: number) {
        this.formService.moveFormArrayGroup(index, step, this.arrayControl, context);
    }

    clear() {
        this.formService.clearFormArray(this.arrayControl, this.arrayModel);
    }

    test() {
        //this.exampleModel.disabledUpdates.next(!this.exampleModel.disabled);
        //this.exampleModel.valueUpdates.next("Hello Hello");
        //console.log(JSON.stringify(this.exampleModel));
        //this.arrayModel.get(1).group[0].valueUpdates.next("This is just a test");
        //this.formService.moveFormArrayGroup(2, -1, this.arrayControl, this.arrayModel);
        /*
        this.formService.addFormGroupControl(
            this.formGroup,
            this.formModel,
            new DynamicFormGroupModel({
                id: "bootstrapFormGroup3",
                group: [new DynamicInputModel({id: "newInput"})]
            })
        );
        this.formService.addFormGroupControl(
            this.formGroup.get("bootstrapFormGroup3") as FormGroup,
            this.formModel[2] as DynamicFormGroupModel,
            new DynamicInputModel({id: "newInput"})
        );
        */
        //this.exampleModel.add({label: "Option 5", value: "option-5"});
    }

    onBlur($event) {
        console.log(`BLUR event on ${$event.model.id}: `, $event);
    }

    onChange($event) {
        console.log(`CHANGE event on ${$event.model.id}: `, $event);
    }

    onFocus($event) {
        console.log(`FOCUS event on ${$event.model.id}: `, $event);
    }
}