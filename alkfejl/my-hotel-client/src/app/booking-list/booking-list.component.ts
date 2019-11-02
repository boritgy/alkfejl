import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/domain/booking';
import { BookingStatus } from 'src/domain/booking-status';
import { BookingMeal } from 'src/domain/booking-meal';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  statusFilter: string = '';

  bookings: Booking[] = [
    {
      id: 1,
      name: 'Anna',
      meal: BookingMeal.Breakfast,
      arriveDate: '2019.10.12.',
      leaveDate: '2019.10.19.',
      price: 25000
      status: BookingStatus.New
      createdAt: null,
      modifiedAt: null,
    },
    {
      id: 1,
      name: 'Panna',
      meal: BookingMeal.AllInclusive,
      arriveDate: '2019.10.12.',
      leaveDate: '2019.10.19.',
      price: 10000
      status: BookingStatus.New
      createdAt: null,
      modifiedAt: null,
    },
  ];

  filteredBookings: Booking[] = this.bookings;

  constructor() { }

  ngOnInit() {
    // this.bookings = [];
  }

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
      this.statusFilter = filterValue;
    }
  }

}
