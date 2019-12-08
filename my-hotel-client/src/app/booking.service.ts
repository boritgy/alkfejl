import { Injectable } from '@angular/core';
import { BookingStatus } from 'src/domain/booking-status';
import { Booking } from 'src/domain/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Booking[] = [];

  filteredBookings: Booking[] = this.bookings;

  constructor(
    private http: HttpClient
  ) {}

  async getBookings() {
    const bookings = await (this.http.get('bookings')
      .toPromise() as Promise<any[]>);
    this.filteredBookings = this.bookings = bookings.map(this.createBookingModel);
  }

  async getBooking(bookingId: number): Promise<Booking> {
    const booking = await (this.http.get(`bookings/${bookingId}`)
      .toPromise() as Promise<any>);
    return this.createBookingModel(booking);
  }

  async createBooking(booking: Booking): Promise<any> {
    await this.http.post('bookings', booking).toPromise();
  }

  async modifyBooking(booking: Booking): Promise<any> {
    await this.http.patch(`bookings/${booking.id}`, booking).toPromise();
  }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredBookings = this.bookings;
      } else {
        this.filteredBookings = this.bookings.filter(booking => {
          return booking.status === filterValue;
        });
      }
    }
  }

  private createBookingModel(booking: any): Booking {
    return {
      ...booking,
      createdAt: new Date(booking.createdAt),
    } as Booking;
  }
}
