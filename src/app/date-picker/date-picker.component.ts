import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() selectedDateEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  update(selectedDate: string): void {
    this.selectedDateEvent.emit(selectedDate);
  }
}
