import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-date',
  templateUrl: './search-date.component.html',
  styleUrls: ['./search-date.component.scss']
})
export class SearchDateComponent implements OnInit {
  isShowPreset: boolean = true;//预设选项中是否显示一分钟和30秒
  isSvTime: boolean = true;//是否取服务器日期
  constructor() {

  }
  getTime(timeType, flag, num) {

  }
  ngOnInit() {
  }
}
