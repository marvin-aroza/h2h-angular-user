import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-center',
  templateUrl: './support-center.component.html',
  styleUrls: ['./support-center.component.css']
})
export class SupportCenterComponent implements OnInit {

  constructor() {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

}
