import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from "../booking-list/booking-list.component";
import { LandingComponent } from '../landing/landing.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { GalleryComponent } from '../gallery/gallery.component';

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
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
