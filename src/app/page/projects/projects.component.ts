import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { AppSettings } from "../../app.settings";
import { ToasterService, ToasterConfig } from 'angular2-toaster';
@Component({
  selector: 'app-projects',
  providers: [ToasterService, CommonService],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private membersUrl = `${AppSettings.env_vars.API_URL}/members`;
  private projecturl = `${AppSettings.env_vars.API_URL}/projects`;
  members: any;
  editing: object = {};
  project: object = {};
  rows = [];
  temp = [];
  // public basic_options;
  isShow: boolean = false;
  mdIcon: string = 'keyboard_arrow_down';
  constructor(private toasterService: ToasterService, private commonService: CommonService) {
  }
  getProjects(): void {
    this.commonService
      .get(this.projecturl)
      .subscribe(projects => {
        this.temp = [...projects];
        this.rows = projects;
      });
  }
  getMembers(): void {
    this.commonService
      .get(this.membersUrl)
      .subscribe(res => {
        // this.members = res;
        let memberArr = [];
        res.forEach(function (member) {
          memberArr.push({
            id: member.id,
            text: member.name
          });
        });
        this.members = memberArr;
      });
  }
  showAddForm() {
    this.isShow = !this.isShow;
  }
  add(project: object): void {
    let samenameflag = true;
    for (var i = 0; i < this.rows.length; i++) {
      if (this.rows[i].name === this.project['name']) {
        this.toasterService.pop('warning', '', '已存在该项目');
        samenameflag = false;
        break;
      }
    }
    if (samenameflag) {
      this.commonService.create(this.projecturl, this.project)
        .subscribe(project => {
          this.rows.unshift(project);
          this.isShow = false;
          this.project = {};
        });
    }
  }
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target ? event.target.value : event.value;
    this.rows = [...this.rows];
    this.commonService.update(`${this.projecturl}/${this.rows[rowIndex].id}`, this.rows[rowIndex]);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  delete(rowIndex: number): void {
    this.commonService
      .delete(`${this.projecturl}/${this.rows[rowIndex].id}`)
      .subscribe(() => {
        this.rows = this.rows.filter(h => h !== this.rows[rowIndex]);
      });
  }
  ngOnInit() {
    this.getProjects();
    this.getMembers();
    /* this.basic_options = {
      multiple: true,
      closeOnSelect: false
    } */
  }
}
