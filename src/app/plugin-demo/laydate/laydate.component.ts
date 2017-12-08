import { Component, OnInit } from '@angular/core';
import laydate from 'assets/plugins/laydate/laydate.js';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-laydate',
  providers: [DatePipe],
  templateUrl: './laydate.component.html',
  styleUrls: ['./laydate.component.css']
})
export class LaydateComponent implements OnInit {
  constructor(private datePipe: DatePipe) { }
  isShowBottom: boolean = false;
  isShow: boolean = true;
  isCalendar: boolean = true;
  mark = {
    '0-10-14': '生日',
    '0-12-31': '跨年', //每年的日期
    '0-0-10': '工资', //每月某天
    '0-0-15': '月中',
    '2017-8-15': '', //如果为空字符，则默认显示数字+徽章
    '2099-10-14': '呵呵'
  };
  done = function (value, date, endDate) {
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  };
  defvalue = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
  ready = function () {
    console.log('日期可选值设定在 <br> 2016-10-14 到 2080-10-14');
  };
  change = function (value, date, endDate) {
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  };
  hint = function (value, date, endDate) {
    window['lay42'].hint(value); //在控件上弹出value值
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  };
  btns = ['clear', 'confirm'];
  getEndDate(type) {
    if (type) {
      console.log(laydate.getEndDate(2, 2080));
    } else {
      console.log(laydate.getEndDate(10));
    }
  }
  ngOnInit() {

  }

}
