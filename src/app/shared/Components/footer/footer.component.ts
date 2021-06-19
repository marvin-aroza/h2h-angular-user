import { Component, OnInit } from '@angular/core';

//services
import { CategoryService } from 'src/app/shared/Services/category.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //variables
  categoryList:any = []

  constructor(
    private categoryService:CategoryService
  ) {
    this.getCategory();
  }

  ngOnInit(): void {
  }

  scrollUp() {
    window.scroll(0,0);
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(res => {
      console.log(res);
      this.categoryList = res.data
    });
  }

}
