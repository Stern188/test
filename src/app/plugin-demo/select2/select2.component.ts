import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { Select2TemplateFunction, Select2OptionData } from '../../common/select2/select2.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-select2',
  providers: [DataService],
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.scss']
})
export class Select2Component implements OnInit {
  public templateListData: Array<Select2OptionData>;
  public changeListData: Array<Select2OptionData>;
  public customListData: Array<Select2OptionData>;
  public multipleListData: Array<Select2OptionData>;
  public dynamicListData: Observable<Array<Select2OptionData>>;
  public changeListAlternative: Array<Select2OptionData>;
  public exampleData: Array<Select2OptionData>;
  public templateOptions: Select2Options;
  public options: Select2Options;
  public multipleOptions: Select2Options;
  public customOptions: Select2Options;
  public startValue: string;
  public dynamicStartValue: Observable<string>;
  public selected: string;
  public value: string[];
  public current: string;

  constructor(private service: DataService) { }

  public changeValue() {
    this.startValue = 'car2';
  }

  public changeData() {
    this.changeListData = this.service.getChangeListAlternative();
  }

  public changed(e: any): void {
    this.selected = e.value;
  }
  public getData(): void {
    console.log($("#sltId").find("option:selected").val());
    console.log($("#sltId").find("option:selected").text());
  }
  // function for result template
  public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    let image = '<span class="image"></span>';

    if (state.additional.image) {
      image = '<span class="image"><img src="' + state.additional.image + '"</span>';
    }

    return jQuery('<span><b>' + state.additional.winner + '.</b> ' + image + ' ' + state.text + '</span>');
  }

  // function for selection template
  public templateSelection: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    return jQuery('<span><b>' + state.additional.winner + '.</b> ' + state.text + '</span>');
  }
  multipleChanged(data: { value: string[] }) {
    this.current = data.value.join(' | ');
  }
  ngOnInit() {
    this.startValue = 'car3';
    this.selected = '';
    this.dynamicListData = this.service.getDynamicList().delay(4000);
    this.dynamicStartValue = Observable.create(obs => {
      obs.next('dyn3');
      obs.complete();
    }).delay(6000);
    this.exampleData = this.service.getBaseList();
    this.multipleListData = this.service.getMultipleList();
    this.customListData = this.service.getCustomList();
    this.changeListData = this.service.getChangeList();
    this.templateListData = this.service.getTemplateList();
    this.templateOptions = {
      templateResult: this.templateResult,
      templateSelection: this.templateSelection
    };
    this.value = ['multiple2', 'multiple4'];
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false
    }
    this.multipleOptions = {
      multiple: true
    }
    // this.customOptions = {
    //   matcher: (term: string, text: string) => {
    //     return text.toUpperCase().indexOf(term.toUpperCase()) == 0;
    //   }
    // };
    this.current = this.value.join(' | ');
  }
}
