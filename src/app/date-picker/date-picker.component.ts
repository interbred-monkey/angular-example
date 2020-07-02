import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() selectedDateEvent = new EventEmitter<string>();

  @Input() selectedDateHandler: ($event: string) => void;
  @Input() selectedDate: string;
  constructor() {}

  ngOnInit(): void {}

  update(): void {
    this.selectedDateEvent.emit(this.selectedDate);
  }
}
