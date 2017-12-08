import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { AppSettings } from "../../app.settings";
import { ToasterService, ToasterConfig } from 'angular2-toaster';
@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ToasterService, CommonService],
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {
  private projecturl = `${AppSettings.env_vars.API_URL}/projects`;
  private versionurl = `${AppSettings.env_vars.API_URL}/versions`;
  projects: any;
  isVersionDisabled: boolean = false;
  isProjectidDisabled: boolean = false;
  editing: object = {};
  v: object = {};
  rows = [];
  temp = [];
  public basic_options;
  isShow: boolean = false;
  mdIcon: string = 'keyboard_arrow_down';
  constructor( private toasterService: ToasterService, private commonService: CommonService) { }
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
  getVersions(): void {
    this.commonService.get(this.versionurl)
      .subscribe(data => {
        if (data) {
          this.temp = [...data];
          this.rows = data;
        }
      });
  }
  showAddForm() {
    this.isVersionDisabled = false;
    this.isProjectidDisabled = false;
    this.isShow = !this.isShow;
  }
  add(v: object): void {
    if (this.v['id']) {
      this.commonService.update(`${this.versionurl}/${this.v['id']}`, this.v)
        .subscribe(versions => {
          this.isShow = false;
          this.v = {};
        });
    } else {
      let samenameflag = true;
      for (var i = 0; i < this.rows.length; i++) {
        if (this.rows[i].projectid === this.v['projectid'] && this.rows[i].version === this.v['version']) {
          this.toasterService.pop('warning', '', '已存在该版本的项目');
          samenameflag = false;
          break;
        }
      }
      if (samenameflag) {
        for (var j = 0; j < this.projects.length; j++) {
          if (this.projects[j].id === this.v['projectid']) {
            this.v['name'] = this.projects[j]['text'];
            break;
          }
        }
        let now = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        this.v['date'] = now;
        this.commonService.create(this.versionurl, this.v)
          .subscribe(versions => {
            this.isShow = false;
            this.v = {};
          });
      }
    }
  }
  edit(rowIndex) {
    this.v = this.rows[rowIndex];
    this.isVersionDisabled = true;
    this.isProjectidDisabled = true;
    this.isShow = true;
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
      .delete(`${this.versionurl}/${this.rows[rowIndex].id}`)
      .subscribe(() => {
        this.rows = this.rows.filter(h => h !== this.rows[rowIndex]);
      });
  }
  ngOnInit() {
    this.getVersions();
    this.getProjects();
    this.basic_options = {
      multiple: true,
      closeOnSelect: false
    }
  }
}
