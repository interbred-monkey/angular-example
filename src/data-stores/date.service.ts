import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DateStore {
  private eventSource = new BehaviorSubject('');
  selectedDate = this.eventSource.asObservable();

  constructor() {}

  update(selectedDate: string): void {
    this.eventSource.next(selectedDate);
  }
}
