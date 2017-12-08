import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { AppSettings } from "../../../app.settings";
// import { Modal } from "ngx-modialog/plugins/vex";
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-personalsettings',
  providers: [ToasterService, CommonService],
  templateUrl: './personalsettings.component.html',
  styleUrls: ['./personalsettings.component.scss']
})
export class PersonalsettingsComponent implements OnInit {
  private _membersUrl = `${AppSettings.env_vars.API_URL}/personalsettings`;


  constructor(private toasterService: ToasterService, /* public modal: Modal, */ private commonService: CommonService) {

  }


  ngOnInit() {
    
  }
}

