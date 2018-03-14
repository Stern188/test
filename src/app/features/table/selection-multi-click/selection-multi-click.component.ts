import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-multi-click',
  templateUrl: './selection-multi-click.component.html',
  styleUrls: ['./selection-multi-click.component.scss']
})
export class SelectionMultiClickComponent {
  rows = [];

  selected = [];

  columns: any[] = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  constructor() {
    this.fetch((data) => {
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

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
