import { Injectable } from '@angular/core';
import { BookingStatus } from 'src/domain/booking-status';
import { Booking } from 'src/domain/booking';
import { Meal } from 'src/domain/meal';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Booking[] = [
    {
      id: 1,
      name: 'Béla',
      meal: Meal.Breakfast,
      status: BookingStatus.New,
      arriveDate: '2019.01.01.',
      leaveDate: '2019.01.07.',
      price: 300,
      createdAt: null,
      modifiedAt: null,
    },
    {
      id: 2,
      name: 'Cili',
      meal: Meal.HB,
      status: BookingStatus.Doing,
      arriveDate: '2019.01.01',
      leaveDate: '2019.01.07',
      price: 500,
      createdAt: null,
      modifiedAt: null,
    },
  ];

  filteredBookings: Booking[] = this.bookings;

  constructor() { }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredBookings = this.bookings;
      } else {
        // Lehet ciklussal is :)
        this.filteredBookings = this.bookings.filter(booking => {
          return booking.status === filterValue;
        });
      }
    }
  }
}
