import { Component, Input } from '@angular/core';
import laydate from 'assets/plugins/laydate/laydate.js';

@Component({
  selector: 'laydate',
  templateUrl: './jquery-laydate.component.html',
  styleUrls: ['./jquery-laydate.component.css']
})
export class JqueryLaydateComponent {
  @Input() layid: string = 'laydate';
  @Input() className: string = '';
  @Input() type: string = 'date';//控件类型
  @Input() range = '';//范围选择 或 range: '~' 来自定义分割字符
  @Input() format: string = 'yyyy-MM-dd'; //自定义格式
  @Input() calendar: boolean = false;//公历节日
  @Input() min: string = '1900-1-1';//最小值
  @Input() max: string = '2099-12-31';//最大值
  //trigger: 'focus',//如果绑定的元素非输入框，则默认事件为：click
  @Input() showBottom: boolean = true;//是否出现底部栏
  @Input() btns = ['clear', 'now', 'confirm'];
  @Input() show: boolean = false;//默认显示
  @Input() position: string = 'absolute';//定位方式
  @Input() zIndex: number = 66666666;//层叠顺序
  @Input() lang: string = 'cn';//国际化
  @Input() theme: string = 'default';//主题
  @Input() mark = {};//标注重要日子
  @Input() done: any;//选中后的回调
  @Input() ready: any;//控件初始打开的回调
  @Input() change: any;//日期切换的回调
  @Input() defValue: string = '';//初始值
  @Input() closeStop: string;//这里代表的意思是：点击 closeStop 指定的元素阻止关闭事件冒泡。如果不设定，则无法弹出控件
  isInput: boolean = (this.position == 'static') ? false : true;

  ngAfterViewInit() {
    let self = this;
    window[self.layid] = laydate.render({
      elem: `#${self.layid}`, //或 elem: document.getElementById('test')、elem: lay('#test') 等
      type: self.type,
      lang: self.lang,
      range: self.range,
      format: self.format,
      calendar: self.calendar,
      mark: self.mark,
      done: self.done,//选中后的回调
      value: self.defValue,
      min: self.min,
      max: self.max,
      ready: self.ready,
      //trigger: self.trigger,
      change: self.change,//日期切换的回调
      closeStop: self.closeStop,//这里代表的意思是：点击 closeStop 指定的元素阻止关闭事件冒泡。如果不设定，则无法弹出控件
      showBottom: self.showBottom,
      btns: self.btns,
      //eventElem: self.eventElem,
      show: self.show,
      position: self.position,
      zIndex: self.zIndex,
      theme: self.theme,
    });
  }

}
