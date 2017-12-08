import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapse-head',
  templateUrl: './collapse-head.component.html',
  styleUrls: ['./collapse-head.component.scss']
})
export class CollapseHeadComponent implements OnInit {
  @Input() headId: string;
  bodyId: string;
  constructor() { }

  ngOnInit() {
    this.bodyId = `#body${this.headId}`;
    this.headId = `head${this.headId}`;
  }

}
