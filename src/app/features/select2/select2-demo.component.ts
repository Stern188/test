import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select2-demo',
  templateUrl: './select2-demo.component.html',
  styleUrls: ['./select2-demo.component.scss']
})
export class Select2DemoComponent implements OnInit {

  public basic_data;
  public basic_options;
  constructor() { }

  ngOnInit() {
    this.basic_data= [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];

    this.basic_options = {
      multiple: true,
      closeOnSelect: false
    }
  }

}
