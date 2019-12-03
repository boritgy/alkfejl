import { Component, OnInit } from '@angular/core';
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

  statuses = [{
    label: 'Új',
    value: 'NEW',
  }, {
    label: 'Folyamatban',
    value: 'IN_PROGRESS',
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

  booking: Booking;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.booking = {
      id: null,
      name: '',
      meal: 'ALLINCLUSIVE' as Meal,
      status: 'NEW' as BookingStatus,
      arriveDate: '',
      leaveDate: '',
      price: null,
      createdAt: null,
      modifiedAt: null,
    };
  }

  submitBooking(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.bookingService.createBooking(form.value);
    this.router.navigate(['/', 'bookings']);
  }
}
