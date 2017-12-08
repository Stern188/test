import { Component, OnInit } from '@angular/core';
import {Modal} from "ngx-modialog/plugins/vex";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  constructor(public modal: Modal) { }

  ngOnInit() {
  }
  onClick() {
    const dialogRef = this.modal.confirm()
      .showCloseButton(true)
      .message('test mesg!')
      .open() .then( dialogRef => {
        dialogRef.result.then( result => alert(`The result is: ${result}`));
      });

  }
}
