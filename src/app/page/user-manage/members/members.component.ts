import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { AppSettings } from "../../../app.settings";
import { Modal } from "ngx-modialog/plugins/vex";
import { ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-members',
  providers: [ToasterService, CommonService],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  private membersUrl = `${AppSettings.env_vars.API_URL}/members`;
  private projecturl = `${AppSettings.env_vars.API_URL}/projects`;
  projects: any;
  editing: object = {};
  users: object = {};
  rows = [];
  temp = [];
  public basic_options;
  isShow: boolean = false;
  mdIcon: string = 'keyboard_arrow_down';
  // formModel: DynamicFormControlModel[] = example_model;
  // formGroup: FormGroup;private formService: DynamicFormService
  constructor(private toasterService: ToasterService, public modal: Modal, private commonService: CommonService) {
    // this.formGroup = this.formService.createFormGroup(this.formModel);
  }
  getProjects(): void {
    this.commonService
      .get(this.projecturl)
      .subscribe(res => {
        // this.projects = res;
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
  getMembers(): void {
    this.commonService
      .get(this.membersUrl)
      .subscribe(members => {
        this.temp = [...members];
        this.rows = members;
      });
  }
  showAddForm() {
    this.isShow = !this.isShow;
  }
  add(users: object): void {
    this.commonService.create(this.membersUrl, this.users)
      .subscribe(member => {
        this.rows.unshift(member);
        this.isShow = false;
        this.users = {};
      });
  }
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    /* if (cell === 'projectsname') {
      this.rows[rowIndex][cell] = this.getSelectValues(event.target);
    } else { */
    this.rows[rowIndex][cell] = event.target ? event.target.value : event.value;
    // }
    this.rows = [...this.rows];
    this.commonService.update(`${this.membersUrl}/${this.rows[rowIndex].id}`, this.rows[rowIndex]);
  }
  /* getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {0.
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }; */
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  delete(rowIndex: number): void {
    const dialogRef = this.modal.confirm()
      .isBlocking(true)
      .message('是否确定删除？')
      .okBtn('确定')
      .cancelBtn('取消')
      .open().then(dialogRef => {
        dialogRef.result.then(result => {
          this.commonService
            .delete(`${this.membersUrl}/${this.rows[rowIndex].id}`)
            .subscribe(() => {
              this.rows = this.rows.filter(h => h !== this.rows[rowIndex]);
            });
          // .catch(() => {
          //   this.toasterService.pop('error', '', '删除失败');
          // });
        }).catch(result => { });
      });
  }
  ngOnInit() {
    this.getMembers();
    this.getProjects();
    this.basic_options = {
      multiple: true,
      closeOnSelect: false
    }
  }
}
