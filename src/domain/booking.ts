import { BookingStatus } from './booking-status';
import { Meal } from './meal';

export interface Booking {
    id: number;
    name: string;
    meal: Meal;
    arriveDate: string;
    leaveDate: string;
    price: number;
    status: BookingStatus;
    createdAt: string;
    modifiedAt: string;
}