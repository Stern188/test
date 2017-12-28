import { Component, Input } from '@angular/core';
import tawdate from 'assets/plugins/tawdate/tawdate.js';

@Component({
  selector: 'tawdate',
  templateUrl: './jquery-tawdate.component.html',
  styleUrls: ['./jquery-tawdate.component.css']
})
export class JqueryTawdateComponent {
  @Input() layid: string = 'tawdate';
  @Input() size: string = '10';
  @Input() value: string = '';
  @Input() isRight: boolean = false;
  @Input() event: string = 'click';//触发事件
  @Input() istime: boolean = false;//是否开启时间选择
  @Input() istoday: boolean = true;//是否显示今天
  @Input() issure: boolean = true;//是否显示确认
  @Input() start: string = '';//开始日期
  @Input() isclear: boolean = true;//是否显示清空
  @Input() min: string = '2010-01-01 00:00:00';//最小值
  @Input() max: string = '2099-12-31 23:59:59';//最大值
  @Input() format: string = 'YYYY-MM-DD'; //自定义格式
  @Input() onlytime: boolean = false;///是否只显示时分秒
  @Input() fixed: boolean = false;///是否固定在可视区域
  @Input() festival: boolean = true;//是否显示节日
  @Input() zIndex: number = 99999999;//层叠顺序
  @Input() choose: any;
  @Input() locale: string = 'zh';

  ngAfterViewInit() {
    let self = this;
    $(`#${self.layid}`).click(function () {
      window[self.layid] = window['tawdate']({
        elem: `#${self.layid}`, //或 elem: document.getElementById('test')、elem: lay('#test') 等
        event: self.event,
        istime: self.istime,
        isclear: self.isclear,
        issure: self.issure,
        min: self.min,
        start: self.start,
        max: self.max,
        isRight: self.isRight,
        fixed: self.fixed,
        format: self.format,
        onlytime: self.onlytime,
        istoday: self.istoday,
        festival: self.festival,
        zIndex: self.zIndex,
        choose: self.choose,
        locale: self.locale,
        international: {
          "clear": "清空",
          "today": "今天",
          "confirm": "确认",
          "time": "时间",
          "date_format_wrong": "日期不符合格式，请重新选择。",
          "date_not_valid": "日期不在有效期内，请重新选择。",
          "elem_error": "选择器elem错误",
          "year": "年",
          "new_year": "元旦",
          "woman": "妇女",
          "qingming": "清明",
          "labour": "劳动",
          "children": "儿童",
          "teacher": "教师",
          "national": "国庆",
          "hours": "小时",
          "minutes": "分钟",
          "seconds": "秒数",
          "tip": "提示"
        }
      });
    });
  }

}
