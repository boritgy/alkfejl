import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Booking } from 'src/domain/booking';
import { FormGroup } from '@angular/forms';
import { BookingStatus } from 'src/domain/booking-status';
import { Meal } from 'src/domain/meal';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() booking: Booking;
  @Output() bookingSubmit: EventEmitter<Booking> = new EventEmitter();

  statuses = [{
    label: 'Új',
    value: 'NEW',
  }, {
    label: 'Folyamatban',
    value: 'DOING',
  }, {
    label: 'Kész',
    value: 'DONE',
  }]

  meals = [{
    label: 'Félpanzió',
    value: 'HB',
  }, {
    label: 'All inclusive',
    value: 'ALLINCLUSIVE',
  }, {
    label: 'Reggeli',
    value: 'Breakfast',
  }]


  constructor() { }

  ngOnInit() {}

  async submitBooking(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.bookingSubmit.emit(form.getRawValue() as Booking);
  }
}
