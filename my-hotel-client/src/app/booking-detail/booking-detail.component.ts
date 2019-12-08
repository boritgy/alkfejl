import { Component, OnInit } from "@angular/core";
import { Booking } from "src/domain/booking";
import { ActivatedRoute, Router } from "@angular/router";
import { BookingService } from "../booking.service";
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: "app-booking-detail",
  templateUrl: "./booking-detail.component.html",
  styleUrls: ["./booking-detail.component.css"]
})
export class BookingDetailComponent implements OnInit {
  UserRole = UserRole;
  booking: Booking;

  constructor( 
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}

  async ngOnInit() {  
    const bookingId = parseInt(this.route.snapshot.params.id);
    this.booking = await this.bookingService.getBooking(bookingId);
  }

  editBooking() {
    this.router.navigate(["bookings", this.booking.id, "edit"]);
  }

}
