import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-renderer',
  templateUrl: './date-renderer.component.html',
  styleUrls: ['./date-renderer.component.css']
})
export class DateRendererComponent implements OnInit {
  @Input() selectedDate: string;
  constructor() {}

  ngOnInit(): void {}
}
