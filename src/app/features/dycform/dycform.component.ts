import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  DynamicCheckboxGroupModel, DynamicDatePickerModel, DynamicFormControlModel, DynamicInputModel,
  DynamicSelectModel, DynamicCheckboxModel, DynamicSwitchModel, DynamicSliderModel, DynamicRadioGroupModel,
  DynamicTextAreaModel, DynamicFormService
} from "@ng2-dynamic-forms/core";


let example_model1=[

  new DynamicCheckboxGroupModel(
    {
      id: "materialCheckboxGroup",
      label:'test check',
      group: [
        new DynamicCheckboxModel(
          {
            id: "materialCheckbox1",
            label: "Checkbox 1"
          }
        ),
        new DynamicCheckboxModel(
          {
            id: "materialCheckbox2",
            label: "Checkbox 2"
          }
        )
      ]
    }
  )
];
let  example_model=[
  new DynamicSelectModel<string>(
    {
      id: "materialSelect",
      label: "Example Select",
      multiple: true,
      options: [
        {
          label: "Option 1",
          value: "option-1",
        },
        {
          label: "Option 2",
          value: "option-2"
        },
        {
          label: "Option 3",
          value: "option-3"
        },
        {
          label: "Option 4",
          value: "option-4"
        }
      ],
      placeholder: "Select an option"
    }
  ),

  new DynamicInputModel(
    {
      hint: "Just a hint",
      label:"test input",
      id: "materialInput",
      list: ["Football", "Basketball", "Baseball", "Hockey"],
      maxLength: 51,
      placeholder: "example input",
      validators: {
        required: null
      },
      errorMessages: {
        required: "Field is required"
      }
    }
  ),

  new DynamicDatePickerModel(
    {
      id: "materialDatepicker",
      placeholder: "Material Datepicker",
      value: new Date()
    }
  ),

  new DynamicCheckboxGroupModel(
    {
      id: "materialCheckboxGroup",
      label:'test check',
      group: [
        new DynamicCheckboxModel(
          {
            id: "materialCheckbox1",
            label: "Checkbox 1"
          }
        ),
        new DynamicCheckboxModel(
          {
            id: "materialCheckbox2",
            label: "Checkbox 2"
          }
        )
      ]
    }
  ),

  new DynamicSwitchModel(
    {
      id: "materialSwitch",
      offLabel: "Off",
      onLabel: "On",
      label:'test switch',
      value: false
    }
  ),

  new DynamicRadioGroupModel<string>(
    {
      id: "materialRadioGroup",
      label: "Example Option",
      options: [
        {
          label: "Option 1",
          value: "option-1",
        },
        {
          disabled: true,
          label: "Option 2",
          value: "option-2"
        },
        {
          label: "Option 3",
          value: "option-3"
        },
        {
          label: "Option 4",
          value: "option-4"
        }
      ],
      relation: [
        {
          action: "DISABLE",
          when: [
            {
              id: "materialSwitch",
              value: true
            }
          ]
        }
      ],
      value: "option-3"
    }
  ),

  new DynamicSliderModel(
    {
      id: "materialSlider",
      min: 0,
      max: 10,
      step: 1,
      value: 3,
      vertical: false
    }
  ),

  new DynamicTextAreaModel(
    {
      id: "materialTextArea",
      label: "Example Textarea",
      rows: 1,
      placeholder: "example Textarea",
      validators: {
        required: null
      },
      errorMessages: {
        required: "Field is required"
      }
    }
  ),

  new DynamicCheckboxModel(
    {
      id: "materialCheckbox",
      label: "I do agree"
    }
  )
];

let example_model_json=[
  {
    "id": "materialSelect",
    "label": "Example Select",
    "options": [
      {
        "label": "Option 1",
        "value": "option-1"
      },
      {
        "label": "Option 2",
        "value": "option-2"
      },
      {
        "label": "Option 3",
        "value": "option-3"
      },
      {
        "label": "Option 4",
        "value": "option-4"
      }
    ],
    "type": "SELECT",
    "multiple": true,
    "placeholder": "Select an option"
  },
  {
    "id": "materialInput",
    "label": "test input",
    "hint": "Just a hint",
    "autoComplete": "on",
    "maxLength": 51,
    "placeholder": "example input",
    "type": "INPUT",
    "inputType": "text",
    "list": [
      "Football",
      "Basketball",
      "Baseball",
      "Hockey"
    ]
  },
  {
    "id": "materialDatepicker",
    "value": "2017-08-04T09:51:08.133Z",
    "placeholder": "Material Datepicker",
    "type": "DATEPICKER",
  },
  {
    "id": "materialCheckboxGroup",
    "label": "test check",
    "group": [
      {
        "id": "materialCheckbox1",
        "label": "Checkbox 1",
        "type": "CHECKBOX",
      },
      {
        "id": "materialCheckbox2",
        "label": "Checkbox 2",
        "type": "CHECKBOX",
      }
    ],
    "type": "CHECKBOX_GROUP",
  },
  {
    "id": "materialSwitch",
    "type": "SWITCH",
    "label": "test switch",
    "offLabel": "Off",
    "onLabel": "On"
  },
  {
    "id": "materialRadioGroup",
    "label": "Example Option",
    "relation": [
      {
        "action": "DISABLE",
        "when": [
          {
            "id": "materialSwitch",
            "value": true
          }
        ]
      }
    ],
    "value": "option-3",
    "options": [
      {
        "label": "Option 1",
        "value": "option-1"
      },
      {
        "disabled": true,
        "label": "Option 2",
        "value": "option-2"
      },
      {
        "disabled": false,
        "label": "Option 3",
        "value": "option-3"
      },
      {
        "disabled": false,
        "label": "Option 4",
        "value": "option-4"
      }
    ],
    "type": "RADIO_GROUP",
  },
  {
    "id": "materialSlider",
    "value": 3,
    "type": "SLIDER",
    "max": 10,
    "min": 0,
    "step": 1,
  },
  {
    "id": "materialTextArea",
    "label": "Example Textarea",
    "placeholder": "example Textarea",
    "type": "TEXTAREA",
    "cols": 20,
    "rows": 1,
    "wrap": "soft"
  },
  {
    "id": "materialCheckbox",
    "label": "I do agree",
    "type": "CHECKBOX",
  }
];

@Component({
  selector: 'app-dycform',
  templateUrl: './dycform.component.html',
  styleUrls: ['./dycform.component.scss']
})
export class DycformComponent implements OnInit {

  formModel: DynamicFormControlModel[] = example_model;
  formGroup: FormGroup;

  formModel2: DynamicFormControlModel[] = example_model;
  formGroup2: FormGroup;

  formModel3: DynamicFormControlModel[] = example_model;
  formGroup3: FormGroup;
  constructor(private formService: DynamicFormService) {
    this.formGroup = this.formService.createFormGroup(this.formModel);

    this.formModel2 = this.formService.fromJSON(example_model_json);
    this.formGroup2 = this.formService.createFormGroup(this.formModel2);

    this.formGroup3 = this.formService.createFormGroup(this.formModel3);

  }

  ngOnInit() {
  }

  onChange(event){
    console.log('event change',event);
  }
}
