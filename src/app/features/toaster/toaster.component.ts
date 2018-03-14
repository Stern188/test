import { Component, OnInit } from '@angular/core';
import { ToasterService, ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  public toasterconfig : ToasterConfig ;

  constructor(private toasterService:ToasterService) { }

  ngOnInit() {
    this.toasterconfig = new ToasterConfig({
      showCloseButton: { 'warning': true, 'error': false }
    });
  }

  public popToast(){
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }
}
