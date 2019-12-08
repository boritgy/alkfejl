import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from "../booking-list/booking-list.component";
import { LandingComponent } from '../landing/landing.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { BookingDetailComponent } from '../booking-detail/booking-detail.component';
import { BookingNewComponent } from '../booking-new/booking-new.component';
import { BookingEditComponent } from '../booking-edit/booking-edit.component';
import { LoginComponent } from '../login/login.component';
import { UserRole } from 'src/domain/user-role';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'bookings',
    component: BookingListComponent,
   /* data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],*/
  },
  {
    path: 'bookings/new',
    component: BookingNewComponent,
    data: {
      roles: [UserRole.User],
    },
    canActivate: [RoleGuard],
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
    path: 'bookings/:id',
    component: BookingDetailComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bookings/:id/edit',
    component: BookingEditComponent,
    data: {
      roles: [UserRole.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      roles: [UserRole.Guest],
    },
    canActivate: [RoleGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class RoutingModule { }
