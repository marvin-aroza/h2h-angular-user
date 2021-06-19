import { Component, OnInit } from '@angular/core';

//service
import { EventsService } from 'src/app/shared/Services/events.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

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
    this.eventServcie.getEventList().subscribe((res:any) => {
      console.log(res);
      this.eventDetails = res.data;
    });
  }

}
