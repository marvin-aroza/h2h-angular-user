import { Component, OnInit } from '@angular/core';

//service
import { EventsService } from 'src/app/shared/Services/events.service'

@Component({
  selector: 'app-recent-events',
  templateUrl: './recent-events.component.html',
  styleUrls: ['./recent-events.component.css']
})
export class RecentEventsComponent implements OnInit {

  //variables
  eventDetails:any

  constructor(
    private eventServcie:EventsService
  ) {
    this.getEventList();
  }

  ngOnInit(): void {
  }

  getEventList() {
    this.eventServcie.getEventList('Completed').subscribe((res:any) => {
      console.log(res);
      this.eventDetails = res.data;
    });
  }

}
