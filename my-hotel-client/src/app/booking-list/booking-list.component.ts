import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from 'src/domain/booking';
import { BookingStatus } from 'src/domain/booking-status';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(
    public bookingService: BookingService
  ) { }

  ngOnInit() {
    this.bookingService.getBookings();
  }

}
