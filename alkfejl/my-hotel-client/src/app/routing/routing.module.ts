import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from "../booking-list/booking-list.component";
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { LandingComponent } from '../landing/landing.component';
// import { BookingDetailComponent } from '../booking-detail/booking-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'bookings',
    component: BookingListComponent
  },
  {
    path: 'bookings/new',
    component: BookingFormComponent
  },
  /*{
    path: 'bookings/:id',
    component: BookingDetailComponent
  },*/
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
