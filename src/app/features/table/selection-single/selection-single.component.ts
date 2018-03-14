import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-single',
  templateUrl: './selection-single.component.html',
  styleUrls: ['./selection-single.component.scss']
})
export class SelectionSingleComponent {

  rows = [];

  selected = [];

  columns: any[] = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  constructor() {
    this.fetch((data) => {
      this.selected = [data[2]];
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
