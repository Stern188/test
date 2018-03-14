import { Component, OnInit } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { Modal } from "ngx-modialog/plugins/bootstrap";

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
    /* const dialogRef = this.modal.alert()
      .showCloseButton(true)
      .message('test mesg!')
      .open() .then( dialogRef => {
        dialogRef.result.then( result => alert(`The result is: ${result}`));
      }); */
  }

  /* 添加modal */
  addSubmit(){
    const dialogRef = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
      .open().then(dialogRef => {
        dialogRef.result.then();
      });
  }
}
