import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/domain/booking';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  booking: Booking;

  constructor( 
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  async ngOnInit() {  
    const bookingId = parseInt(
      this.route.snapshot.params.id);
    this.booking = await this.bookingService.getBooking(bookingId);
  }

}
