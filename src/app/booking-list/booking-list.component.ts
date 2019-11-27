import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from 'src/domain/booking';
import { BookingStatus } from 'src/domain/booking-status';
import { Meal } from 'src/domain/meal';

@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
  providers: [BookingService]
})
export class BookingListComponent implements OnInit {

  statusFilter: string = '';

  bookings: Booking[] = [
    {
      id: 1,
      name: 'Béla',
      meal: Meal.Breakfast,
      status: BookingStatus.New,
      arriveDate: '20190101',
      leaveDate: '20190107',
      price: 300,
      createdAt: null,
      modifiedAt: null,
    },
    {
      id: 2,
      name: 'Cili',
      meal: Meal.HB,
      status: BookingStatus.Doing,
      arriveDate: '20190101',
      leaveDate: '20190107',
      price: 500,
      createdAt: null,
      modifiedAt: null,
    },
  ];

  filteredBookings: Booking[] = this.bookings;

  constructor() { }

  ngOnInit() {
  }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredBookings = this.bookings;
      } else {
        // Lehet ciklussal is :)
        this.filteredBookings = this.bookings.filter(issue => {
          return issue.status === filterValue;
        });
      }
      this.statusFilter = filterValue;
    }
  }

}
