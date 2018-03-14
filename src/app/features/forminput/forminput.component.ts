import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material";

class Bind1{
  val:string;
};

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.scss']
})
export class ForminputComponent implements OnInit {

  public bind1:Bind1;
  constructor(public snackBar:MatSnackBar) {
    this.bind1 = new Bind1();
    this.bind1.val ="before input";
  }

  ngOnInit() {
  }

  public  showBind1()
  {
    this.snackBar.open("Bind1.Val:", this.bind1.val, {
      duration: 2000,
    });
  }

}


