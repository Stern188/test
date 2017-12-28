import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
import * as moment from 'moment';

@Component({
  selector: 'search-date',
  providers: [CommonComponent],
  templateUrl: './search-date.component.html',
  styleUrls: ['./search-date.component.scss']
})
export class SearchDateComponent implements OnInit {
  relativelatestVal: string = "0";//相对选项中最晚单选按钮默认值
  relativeearliestVal: string = "0";//相对选项中最早单选按钮默认值
  @Input() earliestYear: string = "2010";//最早年份设置,默认2010
  tgrFun: string = "";//最后一次触发的方法名
  curTime: string = "";//调用Ember.getCurTime方法返回的最终日期
  @Input() isShowPreset: boolean = true;//预设选项中是否显示一分钟和30秒
  @Input() setDft: string = '30sec';//给按钮设置默认值
  @Input() dateSeparator: string = '-';//日期间隔符号设置
  @Input() hasMsec: boolean = false;//是否有毫秒
  dateFlg: string = 'before';//日期范围选项中下拉默认值设置
  datetimeFlg: string = "before";//日期和时间范围选项中下拉默认值设置
  @Input() isSvTime: boolean = true;//是否取服务器日期
  isChg: string = "0";//给按钮付默认值 isChg=='0'不触发chgDate事件，isChg='1'触发chgDate事件
  @Input() labelType: string = 'input';//弹出浮动框的标签
  @Input() isShowSenior: boolean = true;//是否显示高级选项
  elstTime = this.earliestYear + this.dateSeparator + "01" + this.dateSeparator + "01 00:00:00";//返回最早的日期
  fnlDateFmtr = 'YYYY' + this.dateSeparator + 'MM' + this.dateSeparator + 'DD';//返回最终的日期格式
  fnlDtTmFmtr = 'YYYY' + this.dateSeparator + 'MM' + this.dateSeparator + 'DD hh:mm:ss';//返回最终的日期和时间格式
  fnlMsecFmtr = this.hasMsec ? "." + new Date().getMilliseconds() : '';//返回最终的毫秒格式
  @Output() chgDate = new EventEmitter();
  ids: string;
  realids: string;
  btns = ['clear', 'confirm'];
  constructor(private commonComponent: CommonComponent) { }

  ngOnInit() {
    let self = this;
    window['getCurTime'] = function (time) {
      if (self.isSvTime) {
        let now = moment(time).format(self.fnlDtTmFmtr);
        self[self.tgrFun](time, now, self.setDft, self.isChg);
      } else {
        let now = moment(new Date()).format(self.fnlDtTmFmtr);
        self[self.tgrFun](new Date(), now, self.setDft, self.isChg);
      }
      return self.curTime;
    };
    self.getTime('con_presetBtn', self.setDft, self.isChg);
  }

  ngAfterViewInit() {
    $("#rangeselect option:eq(1),#rangeandtimeselect option:eq(1)").prop("selected", true);
    this.getTime('con_presetBtn', this.setDft, this.isChg);
  }

  start() {
    let self = this, time;
    if (self.isSvTime) {
      self.commonComponent.getSvTime(function (svTime) {
        time = new Date(svTime);
      });
    } else {
      time = new Date();
    }
    return time.getFullYear() + self.dateSeparator + (time.getMonth() + 1) + self.dateSeparator + time.getDate();
  }//日期默认值设置

  now() {
    let self = this, time;
    if (self.isSvTime) {
      self.commonComponent.getSvTime(function (svTime) {
        time = new Date(svTime);
      });
    } else {
      time = new Date();
    }
    return time.getFullYear() + self.dateSeparator + (time.getMonth() + 1) + self.dateSeparator + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  }//返回(服务器/本地)的当前日期

  rangeType = [{
    id: 'between',
    title: "介于"
  }, {
    id: 'before',
    title: "之前"
  }, {
    id: 'after',
    title: "之后"
  }];//日期选项中下拉值设置

  dateType = [{
    id: 'seconds',
    title: "秒前"
  }, {
    id: 'minutes',
    title: "分钟前"
  }, {
    id: 'hours',
    title: "小时前"
  }, {
    id: 'days',
    title: "天前"
  }, {
    id: 'weeks',
    title: "周前"
  }, {
    id: 'months',
    title: "个月前"
  }, {
    id: 'quarters',
    title: "季度前"
  }, {
    id: 'years',
    title: "年前"
  }];//相对选项中下拉值设置

  dateArr = {
    "seconds": "秒",
    "minutes": "分钟",
    "hours": "小时",
    "days": "天",
    "weeks": "周",
    "months": "个月",
    "quarters": "季度",
    "years": "年"
  };//预定义日期和时间数组

  /* 获取时间的方法 */
  getTime(timeType, flag, num) {
    let self = this;
    if (self.isSvTime) {
      self.commonComponent.getSvTime(function (svTime) {
        let now = moment(svTime).format(self.fnlDtTmFmtr);
        self[timeType](svTime, now, flag, num);
      });
    } else {
      let now = moment(new Date()).format(self.fnlDtTmFmtr);
      self[timeType](new Date(), now, flag, num);
    }
  }

  /* 日期和时间范围选项内判断时间格式是否输入正确的方法 */
  timeReg() {
    let regTime;
    if (this.hasMsec) {
      regTime = /^([0-2][0-9]):([0-5][0-9]):([0-5][0-9]).([0-9][0-9][0-9])$/;
    } else {
      regTime = /^([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/;
    }
    let earliest = $("#earliesttime").val();
    let late = $("#latetime").val();
    if (!regTime.test(earliest)) {
      $("#earliesttime").val(this.hasMsec ? "12:00:00.000" : '12:00:00');
    }
    if (!regTime.test(late)) {
      $("#latetime").val(this.hasMsec ? "12:00:00.000" : '12:00:00');
    }
  }

  /* 高级选项内判断时间格式是否输入正确的方法 */
  seniorReg() {
    let regTime = /^[0-9]*$/;
    let seniorElstVal: any = $("#seniorElstInId").val();
    let seniorLtstVal: any = $("#seniorLtstInId").val();
    if (!regTime.test(seniorElstVal)) {
      $("#seniorElstInId").val('');
      $("#seniorElstSpId").text(this.elstTime);
    }
    if (!regTime.test(seniorLtstVal)) {
      $("#seniorLtstInId").val('');
      $("#seniorLtstSpId").text(this.now());
    }
  }

  /* 预设选项中点击触发方法的跳转方法 */
  con_presetBtn(svTime, now, flag, num) {
    let self = this, finDate;
    if (self.labelType === 'sa') {
      let obj = $("a[name='floatname'] .time-label");
      if (flag === '30sec') {
        obj.text("30 秒窗口").prop("title", "30 秒窗口");
        finDate = moment(svTime).subtract('seconds', 30).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1min') {
        obj.text("1 分钟窗口").prop("title", "1 分钟窗口");
        finDate = moment(svTime).subtract('seconds', 60).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '5min') {
        obj.text("5 分钟窗口").prop("title", "5 分钟窗口");
        finDate = moment(svTime).subtract('seconds', 300).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '30min') {
        obj.text("30 分钟窗口").prop("title", "30 分钟窗口");
        finDate = moment(svTime).subtract('seconds', 1800).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1hor') {
        obj.text("1 小时窗口").prop("title", "1 小时窗口");
        finDate = moment(svTime).subtract('hours', 1).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === 'today') {
        obj.text("今天").prop("title", "今天");
        finDate = moment(svTime).format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 00:00:00') + "~" + now;
      } else if (flag === '1weekSoFar') {
        obj.text("一周迄今").prop("title", "一周迄今");
        finDate = moment(svTime).subtract(6, 'days').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1monthSoFar') {
        obj.text("一个月迄今").prop("title", "一个月迄今");
        finDate = moment(svTime).subtract(29, 'days').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1yearSoFar') {
        obj.text("年度迄今").prop("title", "年度迄今");
        finDate = moment(svTime).subtract(364, 'days').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === 'yesterday') {
        obj.text("昨天").prop("title", "昨天");
        finDate = moment(svTime).subtract(1, 'days').format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 00:00:00') + "~" + moment(svTime).subtract(1, 'days').format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 23:59:59');
      } else if (flag === '1weekBef') {
        obj.text("前一周").prop("title", "前一周");
        finDate = moment(svTime).subtract(1, 'week').startOf('week').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'week').endOf('week').format(self.fnlDtTmFmtr);
      } else if (flag === '1monthBef') {
        obj.text("上月").prop("title", "上月");
        finDate = moment(svTime).subtract(1, 'month').startOf('month').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'month').endOf('month').format(self.fnlDtTmFmtr);
      } else if (flag === '1yearBef') {
        obj.text("上一年").prop("title", "上一年");
        finDate = moment(svTime).subtract(1, 'year').startOf('year').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'year').endOf('year').format(self.fnlDtTmFmtr);
      } else if (flag === '15minBef') {
        obj.text("前 15 分钟").prop("title", "前 15 分钟");
        finDate = moment(svTime).subtract('seconds', 900).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '60minBef') {
        obj.text("前 60 分钟").prop("title", "前 60 分钟");
        finDate = moment(svTime).subtract('seconds', 3600).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '4horBef') {
        obj.text("前 4 小时").prop("title", "前 4 小时");
        finDate = moment(svTime).subtract('seconds', 14400).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '24horBef') {
        obj.text("前 24 小时").prop("title", "前 24 小时");
        finDate = moment(svTime).subtract('seconds', 86400).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '7daysBef') {
        obj.text("前 7 天").prop("title", "前 7 天");
        finDate = moment(svTime).subtract('days', 7).startOf('day').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '30daysBef') {
        obj.text("前 30 天").prop("title", "前 30 天");
        finDate = moment(svTime).subtract('days', 30).startOf('day').format(self.fnlDtTmFmtr) + "~" + now;
      }
    } else {
      let obj = $("input[name='floatname']");
      if (flag === '30sec') {
        obj.val(moment(svTime).subtract('seconds', 30).format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 30).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1min') {
        obj.val(moment(svTime).subtract('seconds', 60).format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 60).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '5min') {
        obj.val(moment(svTime).subtract('seconds', 300).format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 300).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '30min') {
        obj.val(moment(svTime).subtract('seconds', 1800).format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 1800).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1hor') {
        obj.val(moment(svTime).subtract('hours', 1).format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('hours', 1).format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === 'today') {
        obj.val(moment(svTime).format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 00:00:00') + "~" + now);
        finDate = moment(svTime).format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 00:00:00') + "~" + now;
      } else if (flag === '1weekSoFar') {
        obj.val(moment(svTime).subtract(6, 'days').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract(6, 'days').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1monthSoFar') {
        obj.val(moment(svTime).subtract(29, 'days').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract(29, 'days').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '1yearSoFar') {
        obj.val(moment(svTime).subtract(364, 'days').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract(364, 'days').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === 'yesterday') {
        obj.val(moment(svTime).subtract(1, 'days').format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 00:00:00') + "~" + moment(svTime).subtract(1, 'days').format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 23:59:59'));
        finDate = moment(svTime).subtract(1, 'days').format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 00:00:00') + "~" + moment(svTime).subtract(1, 'days').format('YYYY' + self.dateSeparator + 'MM' + self.dateSeparator + 'DD 23:59:59');
      } else if (flag === '1weekBef') {
        obj.val(moment(svTime).subtract(1, 'week').startOf('week').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'week').endOf('week').format(self.fnlDtTmFmtr));
        finDate = moment(svTime).subtract(1, 'week').startOf('week').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'week').endOf('week').format(self.fnlDtTmFmtr);
      } else if (flag === '1monthBef') {
        obj.val(moment(svTime).subtract(1, 'month').startOf('month').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'month').endOf('month').format(self.fnlDtTmFmtr));
        finDate = moment(svTime).subtract(1, 'month').startOf('month').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'month').endOf('month').format(self.fnlDtTmFmtr);
      } else if (flag === '1yearBef') {
        obj.val(moment(svTime).subtract(1, 'year').startOf('year').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'year').endOf('year').format(self.fnlDtTmFmtr));
        finDate = moment(svTime).subtract(1, 'year').startOf('year').format(self.fnlDtTmFmtr) + "~" + moment(svTime).subtract(1, 'year').endOf('year').format(self.fnlDtTmFmtr);
      } else if (flag === '15minBef') {
        obj.val(moment(svTime).subtract('seconds', 900).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 900).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '60minBef') {
        obj.val(moment(svTime).subtract('seconds', 3600).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 3600).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '4horBef') {
        obj.val(moment(svTime).subtract('seconds', 14400).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 14400).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '24horBef') {
        obj.val(moment(svTime).subtract('seconds', 86400).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('seconds', 86400).startOf('seconds').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '7daysBef') {
        obj.val(moment(svTime).subtract('days', 7).startOf('day').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('days', 7).startOf('day').format(self.fnlDtTmFmtr) + "~" + now;
      } else if (flag === '30daysBef') {
        obj.val(moment(svTime).subtract('days', 30).startOf('day').format(self.fnlDtTmFmtr) + "~" + now);
        finDate = moment(svTime).subtract('days', 30).startOf('day').format(self.fnlDtTmFmtr) + "~" + now;
      }
    }
    if (num !== "0" && self.chgDate) {
      self.chgDate.emit(finDate);
    }
    self.setDft = flag;
    self.curTime = finDate;
    self.tgrFun = "con_presetBtn";
    $['powerFloat'].hide();
  }

  /* 相对选项中应用按钮触发的方法 */
  relativeBtn(num) {
    let finDate;
    if (this.labelType === 'sa') {
      let obj = $("a[name='floatname'] .time-label"), relativeselect: any = $("#relativeselect").val();
      let relTxt = "前" + " " + ($("#relativeinput").val() || "0") + " " + this.dateArr[relativeselect];
      obj.text(relTxt).prop("title", relTxt);
    } else {
      let obj = $("input[name='floatname']");
      obj.val($("#relativeearliestdate").html() + "~" + $("#relativelatestdate").html());
    }
    finDate = $("#relativeearliestdate").html() + "~" + $("#relativelatestdate").html();
    if (num !== "0" && this.chgDate) {
      this.chgDate.emit(finDate);
    }
    this.curTime = finDate;
    this.tgrFun = "con_relativeDropdown";
    $['powerFloat'].hide();
  }

  /* 实时选项中应用按钮触发的方法的跳转方法 */
  con_realBtn(svTime, now, glag, num) {
    let self = this, finDate;
    if (self.labelType === 'sa') {
      let obj = $("a[name='floatname'] .time-label"), realselect: any = $("#realselect").val();
      let relTxt = "前" + " " + ($("#realInput").val() || "0") + " " + self.dateArr[realselect];
      obj.text(relTxt).prop("title", relTxt);
      if ($("#realdate").html()) {
        finDate = $("#realdate").html() + "~" + now + self.fnlMsecFmtr;
      } else {
        finDate = now + self.fnlMsecFmtr + "~" + now + self.fnlMsecFmtr;
      }
    } else {
      let obj = $("input[name='floatname']");
      if ($("#realdate").html()) {
        obj.val($("#realdate").html() + "~" + now + self.fnlMsecFmtr);
        finDate = $("#realdate").html() + "~" + now + self.fnlMsecFmtr;
      } else {
        obj.val(now + self.fnlMsecFmtr + "~" + now + self.fnlMsecFmtr);
        finDate = now + self.fnlMsecFmtr + "~" + now + self.fnlMsecFmtr;
      }
    }
    if (num !== "0" && self.chgDate) {
      self.chgDate.emit(finDate);
    }
    self.curTime = finDate;
    self.tgrFun = "con_realDropdown";
    $['powerFloat'].hide();
  }

  /* 日期范围选项中应用按钮触发的方法的跳转方法 */
  con_rangeDBtn(svTime, now, flag, num) {
    let finDate;
    let endTxt = $("#enddate").val() ? ($("#enddate").val() + " 23:59:59") : moment(svTime).format(this.fnlDateFmtr + ' 23:59:59');
    let startTxt = $("#startdate").val() ? ($("#startdate").val() + " 00:00:00") : moment(svTime).format(this.fnlDateFmtr + ' 00:00:00');
    if (this.labelType === 'sa') {
      let obj = $("a[name='floatname'] .time-label");
      if (this.dateFlg === "before") {
        obj.text(this.elstTime + " " + "至" + " " + endTxt).prop("title", this.elstTime + " " + "至" + " " + endTxt);
        finDate = this.elstTime + "~" + endTxt;
      } else if (this.dateFlg === "after") {
        obj.text(startTxt + " " + "至" + " " + now).prop("title", startTxt + " " + "至" + " " + now);
        finDate = startTxt + "~" + now;
      } else {
        obj.text(startTxt + " " + "至" + " " + endTxt).prop("title", startTxt + " " + "至" + " " + endTxt);
        finDate = startTxt + "~" + endTxt;
      }
    } else {
      let obj = $("input[name='floatname']");
      if (this.dateFlg === "before") {
        obj.val(this.elstTime + "~" + endTxt);
        finDate = this.elstTime + "~" + endTxt;
      } else if (this.dateFlg === "after") {
        obj.val(startTxt + "~" + now);
        finDate = startTxt + "~" + now;
      } else {
        obj.val(startTxt + "~" + endTxt);
        finDate = startTxt + "~" + endTxt;
      }
    }
    if (num !== "0" && this.chgDate) {
      this.chgDate.emit(finDate);
    }
    this.curTime = finDate;
    this.tgrFun = "con_rangeDBtn";
    $['powerFloat'].hide();
  }

  /* 日期和时间范围选项中应用按钮触发的方法的跳转方法 */
  con_rangeDTBtn(svTime, now, flag, num) {
    let finDate;
    let endTxt = $("#enddateandtime").val() ? ($("#enddateandtime").val() + " " + ($("#latetime").val() || "12:00:00")) : now;
    let startTxt = $("#startdateandtime").val() ? ($("#startdateandtime").val() + " " + ($("#earliesttime").val() || "12:00:00")) : now;
    if (this.labelType === 'sa') {
      let obj = $("a[name='floatname'] .time-label");
      if (this.datetimeFlg === "before") {
        obj.text(this.elstTime + " " + "至" + " " + endTxt).prop("title", this.elstTime + " " + "至" + " " + endTxt);
        finDate = this.elstTime + "~" + endTxt;
      } else if (this.datetimeFlg === "after") {
        obj.text(startTxt + " " + "至" + " " + now).prop("title", startTxt + " " + "至" + " " + now);
        finDate = startTxt + "~" + now;
      } else {
        obj.text(startTxt + " " + "至" + " " + endTxt).prop("title", startTxt + " " + "至" + " " + endTxt);
        finDate = startTxt + "~" + endTxt;
      }
    } else {
      let obj = $("input[name='floatname']");
      if (this.datetimeFlg === "before") {
        obj.val(this.elstTime + "~" + endTxt);
        finDate = this.elstTime + "~" + endTxt;
      } else if (this.datetimeFlg === "after") {
        obj.val(startTxt + "~" + now);
        finDate = startTxt + "~" + now;
      } else {
        obj.val(startTxt + "~" + endTxt);
        finDate = startTxt + "~" + endTxt;
      }
    }
    if (num !== "0" && this.chgDate) {
      this.chgDate.emit(finDate);
    }
    this.curTime = finDate;
    this.tgrFun = "con_rangeDTBtn";
    $['powerFloat'].hide();
  }

  /* 相对选项中下拉触发的方法的跳转方法 */
  con_relativeDropdown(svTime, now, flag, num) {
    let self = this, radioEarliestVal, radioLatestVal;
    let id = $("#relativeselect").val();
    if (typeof id === "string") {
      self.ids = id;
    }
    let relativeinput: any = $("#relativeinput").val(), inputVal = parseInt(relativeinput);
    radioEarliestVal = self.relativeearliestVal;
    radioLatestVal = self.relativelatestVal;
    if (self.ids === "seconds" || !self.ids) {
      $("#datetext .mat-radio-label-content").text("秒开始");
      $("#sofarstart .mat-radio-label-content").text("当前秒开始");
      let date1 = moment(svTime).subtract('seconds', inputVal).startOf('seconds').format(self.fnlDtTmFmtr);
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date1 + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date1 + (self.hasMsec ? ".000" : ''));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(now + (self.hasMsec ? ".000" : ''));
      }
    } else if (self.ids === "minutes") {
      $("#datetext .mat-radio-label-content").text("分钟开始");
      $("#sofarstart .mat-radio-label-content").text("当前分钟开始");
      let date2 = moment(svTime).subtract('seconds', inputVal * 60).startOf('seconds').format(self.fnlDtTmFmtr);
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date2 + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date2.substring(0, date2.toLocaleString().length - 3) + (self.hasMsec ? ":00.000" : ':00'));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(moment(now).format(self.fnlDateFmtr + ' hh:mm') + (self.hasMsec ? ":00.000" : ':00'));
      }
    } else if (self.ids === "hours") {
      $("#datetext .mat-radio-label-content").text("小时开始");
      $("#sofarstart .mat-radio-label-content").text("当前小时开始");
      let date3 = moment(svTime).subtract('seconds', inputVal * 3600).startOf('seconds').format(self.fnlDtTmFmtr);
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date3 + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date3.substring(0, date3.toLocaleString().length - 6) + (self.hasMsec ? ":00:00.000" : ':00:00'));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(moment(now).format(self.fnlDateFmtr + ' hh') + (self.hasMsec ? ":00:00.000" : ':00:00'));
      }
    } else if (self.ids === "days") {
      $("#datetext .mat-radio-label-content").text("一天开始");
      $("#sofarstart .mat-radio-label-content").text("今日开始");
      let date4 = moment(svTime).subtract('days', inputVal).startOf('days');
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date4.format(self.fnlDtTmFmtr) + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date4.format(self.fnlDateFmtr) + (self.hasMsec ? " 12:00:00.000" : ' 12:00:00'));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(moment(now).format(self.fnlDateFmtr) + (self.hasMsec ? " 12:00:00.000" : ' 12:00:00'));
      }
    } else if (self.ids === "weeks") {
      $("#datetext .mat-radio-label-content").text("每周的第一天");
      $("#sofarstart .mat-radio-label-content").text("本周的第一天");
      let date5 = moment(svTime).subtract(inputVal, 'week').startOf('week');
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date5.format(self.fnlDtTmFmtr) + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date5.format(self.fnlDateFmtr) + (self.hasMsec ? " 12:00:00.000" : ' 12:00:00'));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(moment(now).subtract(0, 'week').startOf('week').format(self.fnlDateFmtr) + (self.hasMsec ? " 12:00:00.000" : ' 12:00:00'));
      }
    } else if (self.ids === "months") {
      $("#datetext .mat-radio-label-content").text("每月的第一天");
      $("#sofarstart .mat-radio-label-content").text("本月的第一天");
      let date6 = moment(svTime).subtract(inputVal, 'month').startOf('month');
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date6.format(self.fnlDtTmFmtr) + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date6.format('YYYY' + self.dateSeparator + 'MM') + self.dateSeparator + (self.hasMsec ? "01 12:00:00.000" : '01 12:00:00'));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(moment(now).format('YYYY' + self.dateSeparator + 'MM') + self.dateSeparator + (self.hasMsec ? "01 12:00:00.000" : '01 12:00:00'));
      }
    } else if (self.ids === "quarters") {
      $("#datetext .mat-radio-label-content").text("每季度第一天");
      $("#sofarstart .mat-radio-label-content").text("本季度第一天");
      let date7 = moment(svTime).subtract(inputVal * 3, 'month').startOf('month');
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date7.format(self.fnlDtTmFmtr) + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date7.format('YYYY' + self.dateSeparator + 'MM') + self.dateSeparator + (self.hasMsec ? "01 12:00:00.000" : '01 12:00:00'));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(moment(now).format('YYYY' + self.dateSeparator + 'MM') + self.dateSeparator + (self.hasMsec ? "01 12:00:00.000" : '01 12:00:00'));
      }
    } else if (self.ids === "years") {
      $("#datetext .mat-radio-label-content").text("每年第一天");
      $("#sofarstart .mat-radio-label-content").text("本年度第一天");
      let date8 = moment(svTime).subtract(inputVal, 'year').startOf('year');
      if (radioEarliestVal === "0") {
        $("#relativeearliestdate").html(date8.format(self.fnlDtTmFmtr) + self.fnlMsecFmtr);
      } else if (radioEarliestVal === "1") {
        $("#relativeearliestdate").html(date8.format('YYYY') + self.dateSeparator + "01" + self.dateSeparator + (self.hasMsec ? "01 12:00:00.000" : '01 12:00:00'));
      }
      if (radioLatestVal === "0") {
        $("#relativelatestdate").html(now + self.fnlMsecFmtr);
      } else if (radioLatestVal === "1") {
        $("#relativelatestdate").html(moment(now).format('YYYY') + self.dateSeparator + "01" + self.dateSeparator + (self.hasMsec ? "01 12:00:00.000" : '01 12:00:00'));
      }
    }
    if (num !== "1") {
      self.relativeBtn(num);
    }
  }

  /* 实时选项中下拉触发的方法的跳转方法 */
  con_realDropdown(svTime, now, flag, num) {
    let self = this;
    let id = $("#realselect").val();
    if (typeof id === "string") {
      self.realids = id;
    }
    let realInput: any = $("#realInput").val(), realInputVal = parseInt(realInput);
    if (self.realids === "seconds" || !self.realids) {
      let date9 = moment(svTime).subtract('seconds', realInputVal).startOf('seconds').format(self.fnlDtTmFmtr);
      $("#realdate").html(date9 + self.fnlMsecFmtr);
    } else if (self.realids === "minutes") {
      let date10 = moment(svTime).subtract('seconds', realInputVal * 60).startOf('seconds').format(self.fnlDtTmFmtr);
      $("#realdate").html(date10 + self.fnlMsecFmtr);
    } else if (self.realids === "hours") {
      let date11 = moment(svTime).subtract('seconds', realInputVal * 3600).startOf('seconds').format(self.fnlDtTmFmtr);
      $("#realdate").html(date11 + self.fnlMsecFmtr);
    } else if (self.realids === "days") {
      let date12 = moment(svTime).subtract('days', realInputVal).startOf('days').format(self.fnlDtTmFmtr);
      $("#realdate").html(date12 + self.fnlMsecFmtr);
    } else if (self.realids === "weeks") {
      let date13 = moment(svTime).subtract(realInputVal, 'week').startOf('week').format(self.fnlDtTmFmtr);
      $("#realdate").html(date13 + self.fnlMsecFmtr);
    } else if (self.realids === "months") {
      let date14 = moment(svTime).subtract(realInputVal, 'month').startOf('month').format(self.fnlDtTmFmtr);
      $("#realdate").html(date14 + self.fnlMsecFmtr);
    } else if (self.realids === "quarters") {
      let date15 = moment(svTime).subtract(realInputVal * 3, 'month').startOf('month').format(self.fnlDtTmFmtr);
      $("#realdate").html(date15 + self.fnlMsecFmtr);
    } else if (self.realids === "years") {
      let date16 = moment(svTime).subtract(realInputVal, 'year').startOf('year').format(self.fnlDtTmFmtr);
      $("#realdate").html(date16 + self.fnlMsecFmtr);
    }
    if (num !== "1") {
      self.con_realBtn(svTime, now, flag, num);
    }
  }

  /* 日期范围选项中下拉触发的方法 */
  rangeDropdown() {
    let rangeselect: any = $("#rangeselect").val();
    this.dateFlg = rangeselect;
  }

  /* 日期和时间范围选项中下拉触发的方法 */
  rangeandtimeDropdown() {
    let rangeandtimeselect: any = $("#rangeandtimeselect").val();
    this.datetimeFlg = rangeandtimeselect;
  }

  /* 高级选项中最早文本框触发的事件 */
  seniorElstKU() {
    let seniorElstVal: any = $('#seniorElstInId').val();
    $('#seniorElstSpId').text(moment(this.elstTime).add('seconds', seniorElstVal).format(this.fnlDtTmFmtr));
  }

  /* 高级选项中最晚文本框触发的事件的跳转方法 */
  con_seniorLtstKU(svTime, now, flag, num) {
    let seniorLtstVal: any = $('#seniorLtstInId').val();
    $('#seniorLtstSpId').text(moment(svTime).subtract('seconds', seniorLtstVal).format(this.fnlDtTmFmtr));
    if (num !== "1") {
      this.seniorBtn(svTime, now, flag, num);
    }
  }

  /* 高级选项中应用按钮触发的方法 */
  seniorBtn(svTime, now, flag, num) {
    let startTxt = $('#seniorElstSpId').text();
    let endTxt = $('#seniorLtstSpId').text(), obj;
    if (this.labelType === 'sa') {
      obj = $("a[name='floatname'] .time-label");
      obj.text(startTxt + " " + "至" + " " + endTxt).prop("title", startTxt + " " + "至" + " " + endTxt);
    } else {
      obj = $("input[name='floatname']");
      obj.val(startTxt + "~" + endTxt);
    }
    if (num !== "0" && this.chgDate) {
      this.chgDate.emit(startTxt + "~" + endTxt);
    }
    this.curTime = startTxt + "~" + endTxt;
    this.tgrFun = "con_seniorLtstKU";
    $['powerFloat'].hide();
  }
}
