import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  DynamicFormComponent,
  DynamicFormControlEvent,
  DynamicFormControlModel,
  DynamicTemplateDirective,
  DYNAMIC_FORM_CONTROL_TYPE_ARRAY,
  DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX,
  DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_INPUT,
  DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_SELECT,
  DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER,
  DYNAMIC_FORM_CONTROL_TYPE_SLIDER  
} from "@ng2-dynamic-forms/core";
import { DynamicBootstrapFormControlComponent } from "./dynamic-bootstrap-form-control.component";

@Component({
  selector: "dynamic-bootstrap-form",
  templateUrl: './dynamic-bootstrap-form.component.html',
  styleUrls: ['./dynamic-bootstrap-form.component.scss']
})
export class DynamicBootstrapFormComponent  extends DynamicFormComponent {

  @Input() group: FormGroup;
  @Input() model: DynamicFormControlModel[];
  @Input() formHorizontal: boolean = false;
  @Input() labelCheck: boolean = false;

  @Output() blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
  @Output() change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
  @Output() focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

  @ContentChildren(DynamicTemplateDirective) templates: QueryList<DynamicTemplateDirective>;

  @ViewChildren(DynamicBootstrapFormControlComponent) components: QueryList<DynamicBootstrapFormControlComponent>;
}

