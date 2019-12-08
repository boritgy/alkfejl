import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/domain/booking';
import { BookingService } from '../booking.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  booking: Booking;

    constructor(
      private bookingService: BookingService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

  async ngOnInit() {
    const bookingId = parseInt(
      this.route.snapshot.params.id);
    this.booking = await this.bookingService.getBooking(bookingId);
  }

  async submitBooking(booking: Booking) {
    booking.id = this.booking.id;
    await this.bookingService.modifyBooking(booking);
    this.router.navigate(['/', 'bookings']);
  }

}
