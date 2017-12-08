import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'power-float',
  templateUrl: './power-float.component.html',
  styleUrls: ['./power-float.component.scss']
})
export class PowerFloatComponent implements OnInit {
  @Input() className = 'float';
  @Input() relFloat = 'pagePanel';
  @Input() labelType = "input";
  @Input() pLabel = "点击弹出";
  @Input() FoffsetsX = 0;
  @Input() FoffsetsY = 0;
  @Input() Fwidth = "auto";
  @Input() FzIndex = 999;
  @Input() FeventType = "click";
  @Input() FshowDelay = 0; //鼠标hover显示延迟
  @Input() FhideDelay = 0; //鼠标移出隐藏延时
  @Input() FhoverHold = true;
  @Input() FhoverFollow = false; //true或是关键字x, y
  @Input() FtargetMode = "common"; //浮动层的类型，其他可选参数有：ajax, list, remind
  @Input() Ftarget = null; //target对象获取来源，优先获取，如果为null，则从targetAttr中获取。
  @Input() FtargetAttr = "rel"; //target对象获取来源，当targetMode为list时无效
  @Input() Fcontainer = null; //转载target的容器，可以使用"plugin"关键字，则表示使用插件自带容器类型
  @Input() FreverseSharp = true; //是否反向小三角的显示，默认ajax, remind是显示三角的，其他如list和自定义形式是不显示的
  @Input() Fposition = "4-1"; //trigger-target
  @Input() FedgeAdjust = true; //边缘位置自动调整
  @Input() FshowCall = $.noop;
  @Input() FhideCall = $.noop;
  @Input() inputId = '';
  @Input() Fvalue = '';
  @Input() Freadonly = false;

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    let self = this;
    $("[name='floatname']")['powerFloat']({
      width: self.Fwidth, //可选参数：inherit，数值(px)
      offsets: {
        x: self.FoffsetsX,
        y: self.FoffsetsY
      },
      zIndex: self.FzIndex,
      eventType: self.FeventType, //事件类型，其他可选参数有：click, focus
      showDelay: self.FshowDelay, //鼠标hover显示延迟
      hideDelay: self.FhideDelay, //鼠标移出隐藏延时
      hoverHold: self.FhoverHold,
      hoverFollow: self.FhoverFollow, //true或是关键字x, y
      targetMode: self.FtargetMode, //浮动层的类型，其他可选参数有：ajax, list, remind
      target: self.Ftarget, //target对象获取来源，优先获取，如果为null，则从targetAttr中获取。
      targetAttr: self.FtargetAttr, //target对象获取来源，当targetMode为list时无效
      container: self.Fcontainer, //转载target的容器，可以使用"plugin"关键字，则表示使用插件自带容器类型
      reverseSharp: self.FreverseSharp, //是否反向小三角的显示，默认ajax, remind是显示三角的，其他如list和自定义形式是不显示的
      position: self.Fposition, //trigger-target
      edgeAdjust: self.FedgeAdjust, //边缘位置自动调整
      showCall: self.FshowCall,
      hideCall: self.FhideCall
    });
  }
}
