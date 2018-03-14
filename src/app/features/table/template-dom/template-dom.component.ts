import { Component } from '@angular/core';

@Component({
  selector: 'app-template-dom',
  templateUrl: './template-dom.component.html',
  styleUrls: ['./template-dom.component.scss']
})
export class TemplateDomComponent {
  rows = [];
  joke = 'knock knock';

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
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

}
