import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
   @Output() public retry = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  retryOut() {
    this.retry.emit(true);

  }

}
