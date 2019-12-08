import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() statusFilter: string = '';
  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.bookingService.filterChange(e);
    this.filterChange.emit(e);
  }

}
