import { Component, OnInit } from '@angular/core';

//service
import { DonateService } from 'src/app/shared/Services/donate.service'

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent implements OnInit {

  //variables
  donationCount:any
  donationDetails:any

  constructor(
    private donateService:DonateService
  ) {
    this.getDonationCount();
  }

  ngOnInit(): void {
  }

  getDonationCount() {
    this.donateService.getDonationDetailscount().subscribe(res => {
      console.log(res);
      this.donationCount = res.data[1];
      this.donationDetails = res.data[0]
    });
  }

}
