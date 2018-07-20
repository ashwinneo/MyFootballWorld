import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-failure',
  templateUrl: './modal-failure.component.html',
  styleUrls: ['./modal-failure.component.css']
})
export class ModalFailureComponent implements OnInit {

  constructor() { }
  @Output() close = new EventEmitter<any>();
  display: String;
  errorMessage: String;
  @Input('errorMessage') errorText;
  ngOnInit() {
    this.display = 'block';
    console.log(this.errorText);
    this.errorMessage = this.errorText;
  }

  closePopup() {
    this.close.emit(false);
  }

}
