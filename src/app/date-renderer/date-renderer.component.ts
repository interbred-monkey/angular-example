import { Component, OnInit } from '@angular/core';
import { DateStore } from 'src/data-stores/date.service';

@Component({
  selector: 'app-date-renderer',
  templateUrl: './date-renderer.component.html',
  styleUrls: ['./date-renderer.component.css']
})
export class DateRendererComponent implements OnInit {
  selectedDate: string;
  constructor(private readonly dateStore: DateStore) {}

  ngOnInit(): void {
    this.dateStore.selectedDate.subscribe(selectedDate => {
      this.selectedDate = selectedDate;
    });
  }
}
