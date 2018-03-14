import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting-client',
  templateUrl: './sorting-client.component.html',
  styleUrls: ['./sorting-client.component.scss']
})
export class SortingClientComponent {
  rows = [];

  columns = [
    { name: 'Company' },
    { name: 'Name' },
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
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

}
