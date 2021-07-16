import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ModalService } from 'src/app/shared/Services/modal.service'

@Component({
  selector: 'app-trigger-pass',
  templateUrl: './trigger-pass.component.html',
  styleUrls: ['./trigger-pass.component.css']
})
export class TriggerPassComponent implements OnInit {

  token = this.route.snapshot.params.token
  constructor(
    private route : ActivatedRoute,
    private ModalService: ModalService
  ) { }

  ngOnInit(): void {
    this.resetPass();
  }

  resetPass(): void {
    this.ModalService.resetPassword(this.token);
  }

}
