import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateStore } from '../../data-stores/date.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  constructor(private readonly dateStore: DateStore) {}

  ngOnInit(): void {}

  update(selectedDate: string): void {
    this.dateStore.update(selectedDate);
  }
}
