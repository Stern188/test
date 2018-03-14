import {Component, Input, OnInit} from '@angular/core';
import {Chart} from "../chart";
import {CHART_EDITOR_CFG, CHART_EDITOR_SERIE_TEMPLATE} from "./chart-editor.data";
import {DynamicFormControlModel, DynamicFormService} from "@ng2-dynamic-forms/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-chart-editor',
  templateUrl: './chart-editor.component.html',
  styleUrls: ['./chart-editor.component.scss']
})
export class ChartEditorComponent implements OnInit {

  public config=CHART_EDITOR_CFG;
  public level0:string;
  public level1 :string;
  public form_config:any;
  public formModel: DynamicFormControlModel[] ;
  public formGroup: FormGroup;

  @Input() chart:Chart;

  constructor(public formService:DynamicFormService) { }

  ngOnInit() {
    this.level0=Object.keys(this.config)[0];
    this.checkLevel1(Object.keys(this.config[this.level0])[0]);
  }

  checkLevel0(l0){
    this.level0=l0;
  }
  checkLevel1(l1){
    this.level1=l1;
    if(l1.startsWith('serie.'))
    {
      this.form_config=CHART_EDITOR_SERIE_TEMPLATE[this.level0];
    }
    else{
      this.form_config=this.config[this.level0][this.level1]['form_config'];
    }

    this.formModel = this.formService.fromJSON(this.form_config);
    this.formGroup = this.formService.createFormGroup(this.formModel);


  }

  onChange(event){

  }
}
