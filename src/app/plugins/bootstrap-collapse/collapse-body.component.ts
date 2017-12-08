import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapse-body',
  templateUrl: './collapse-body.component.html',
  styleUrls: ['./collapse-body.component.scss']
})
export class CollapseBodyComponent implements OnInit {
  @Input() bodyId: string;
  @Input() bodyClass: string;
  headId: string;
  constructor() { }

  ngOnInit() {
    this.headId = `head${this.bodyId}`;
    this.bodyId = `body${this.bodyId}`;
    this.bodyClass = this.bodyClass ? `panel-collapse collapse ${this.bodyClass}` : 'panel-collapse collapse';
  }

}
