import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateRendererComponent } from './date-renderer/date-renderer.component';
import { DateStore } from '../data-stores/date.service';

@NgModule({
  declarations: [AppComponent, DatePickerComponent, DateRendererComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DateStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
