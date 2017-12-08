import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { CommonComponent } from '../../common/common.component';
import { AppSettings } from "../../app.settings";
// import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-index',
  providers: [CommonService, CommonComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private projecturl = `${AppSettings.env_vars.API_URL}/projects`;
  private versionurl = `${AppSettings.env_vars.API_URL}/versions`;
  private membersUrl = `${AppSettings.env_vars.API_URL}/members`;
  private indexUrl = `${AppSettings.env_vars.API_URL}/index`;
  projects: any;
  versions: any;
  status = [{
    id: 'all',
    text: '通过'
  }, {
    id: 'part',
    text: '部分通过'
  }, {
    id: 'none',
    text: '未通过'
  }];
  members: string;
  indexMod: object = {};
  rows = [];
  temp = [];
  proVal: number = 1;
  verVal: number = 1;
  isShow: boolean = false;
  constructor(private commonService: CommonService/* , private modalService: NgbModal */, private commonComponent: CommonComponent) {
  }
  open(content) {
    // this.modalService.open(content);
  }
  getProjects(): void {
    this.commonService
      .get(this.projecturl)
      .subscribe(res => {
        let projectArr = [];
        res.forEach(function (project) {
          projectArr.push({
            id: project.id,
            text: project.name
          });
        });
        this.projects = projectArr;
      });
  }
  getIndex(): void {
    this.commonService
      .get(this.indexUrl)
      .subscribe(index => {
        index.forEach((col) => {
          if (col.state === "all") {
            col.state_text = "通过";
          } else if (col.state === "part") {
            col.state_text = "部分通过";
          } else {
            col.state_text = "未通过";
          }
          col.nofilter = ['state'];
        });
        this.temp = [...index];
        this.rows = index;
      });
  }
  getMembers(): void {
    this.commonService
      .get(this.membersUrl)
      .subscribe(res => {
        let memberArr = [];
        res.forEach(function (member) {
          memberArr.push(member.name);
        });
        this.members = memberArr.join(',');
      });
  }
  add(indexMod: object): void {
    this.commonService.create(this.indexUrl, this.indexMod)
      .subscribe(index => {
        this.rows.unshift(index);
        this.isShow = false;
        this.indexMod = {};
      });
  }
  chgPro() {
    this.commonService.get(`${this.versionurl}/${this.proVal}`);
  }
  chgVer() {
    this.commonService.get(`${this.membersUrl}/${this.proVal}/${this.verVal}`);
    this.getMembers();
  }
  ngOnInit() {
    this.getIndex();
    this.getProjects();
    this.getMembers();
    this.chgPro();
  }
}
