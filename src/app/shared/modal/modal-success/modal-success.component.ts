import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {

  display: String;
  constructor() { }
  @Input('successMessage') successMessage;
  successText: String;
  @Output() close = new EventEmitter<any>();
  ngOnInit() {
    this.display = 'block';
    this.successText = this.successMessage;
  }

  closePopup() {
    this.close.emit(false);
  }

}
