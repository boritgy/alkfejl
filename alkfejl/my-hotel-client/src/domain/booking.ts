import { BookingStatus } from './booking-status';
import { BookingMeal } from './booking-meal';

export interface Booking {
    id: number;
    name: string;
    meal: BookingMeal
    arriveDate: string;
    leaveDate: string;
    price: number;
    status: BookingStatus;
    createdAt: string;
    modifiedAt: string;
}
