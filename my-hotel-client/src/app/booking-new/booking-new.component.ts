import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/domain/booking';
import { Meal } from 'src/domain/meal';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { BookingStatus } from 'src/domain/booking-status';

@Component({
  selector: 'app-booking-new',
  templateUrl: './booking-new.component.html',
  styleUrls: ['./booking-new.component.css']
})
export class BookingNewComponent implements OnInit {

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
      people: null
    };
  }
  async submitBooking(booking: Booking) {
      await this.bookingService.createBooking(booking);
      this.router.navigate(['/', 'bookings']);
    }
}









  

