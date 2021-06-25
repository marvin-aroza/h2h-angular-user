import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

//services
import { CategoryService } from 'src/app/shared/Services/category.service'
import { NewsletterService } from 'src/app/shared/Services/newsletter.service'
import Swal from 'sweetalert2'
import {Router} from '@angular/router'
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  //variables
  categoryList:any = []
  @ViewChild("email") email!: ElementRef;
  subscription1!: Subscription
  subscription2!: Subscription
  subscriptions: Subscription[] = []

  constructor(
    private categoryService:CategoryService,
    private newsletterService: NewsletterService,
    private router:Router,
  ) {
    this.getCategory();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() : void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  scrollUp() {
    window.scroll(0,0);
  }

  getCategory() {
    this.subscription1 = this.categoryService.getCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res.data
    });
    this.subscriptions.push(this.subscription1);
  }

  subscribeNewsletter() {
    let formData = {
      email: this.email.nativeElement.value
    }
    this.subscription2 = this.newsletterService.subscribeNewsletter(formData).subscribe(result => {
      console.log(result);
      if(result.status){
        // window.location.reload();
        Swal.fire({
          icon: 'success',
          title: result.message,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.email.nativeElement.value = ''
          this.router.navigate(['']);
          // window.location.reload();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          showConfirmButton: false,
          timer: 3000
        });
      }
    });
    this.subscriptions.push(this.subscription2);
  }

}
