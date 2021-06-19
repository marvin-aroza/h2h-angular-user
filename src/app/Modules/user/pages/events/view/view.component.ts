import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
//service
import { EventsService } from 'src/app/shared/Services/events.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //variable
  eventId: any = this.router.snapshot.params.id
  eventDetail:any;

  constructor(
    private eventService:EventsService,
    private router: ActivatedRoute
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    this.getNewsDetail();
  }

  getNewsDetail() {
    this.eventService.getEvent(this.eventId).subscribe(res => {
      console.log(res);
      this.eventDetail = res.data
    });
  }

}
