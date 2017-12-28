import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export interface User {
  username: string; // 必填，5-20个字符
  email: string; // 必填，有效的email格式
  password: string; // 必填，值要与confirmPassword值一样
  confirmPassword: string; // 必填，值要与password值一样
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  public User: User;/*数据格式*/
  private hide1: boolean = true;
  private hide2: boolean = true;
  private user: FormGroup;
  private sexData: any;
  private options: any;
  private value: string = "1";
  constructor(public fb: FormBuilder) { }


  ngOnInit() {
    this.sexData = [
      {
        id: '0',
        text: '男'
      },
      {
        id: '1',
        text: '女'
      }
    ];
    this.options = {
      placeholder: "性别",
      closeOnSelect: true,
      allowClear: true
    }
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^([0-9A-Za-z_]){6,20}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^([0-9A-Za-z_]){6,20}$')]],
      mark: ['', [Validators.maxLength(500)]],
      sex: ['', [Validators.required]]/* ,
      birthday: ['', [Validators.required]] */
    });
  }

  saveUser(): void {
    console.log(this.user.value);
  }
}
