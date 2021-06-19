import { Component, OnInit } from '@angular/core';

//modules
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

//services
import { CategoryService } from 'src/app/shared/Services/category.service'
import { DonateService } from 'src/app/shared/Services/donate.service'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //variables
  categories:any = []
  activeLink:any = 'All'
  forumList:any = []
  p:number = 1;
  form!: FormGroup
  formLoaded:Boolean = false
  isSubmitted=false;
  isLoaded=false;
  imgFile:any = '';

  constructor(
    private categoryService: CategoryService,
    private donateService:DonateService,
    public fb: FormBuilder
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    this.getCategory();
    this.getForum('');
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      categoryId: ['', Validators.required],
      body: ['', Validators.required],
      img: ['']
    });
    this.formLoaded = true;
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(res => {
      console.log(res.data);
      // this.activeLink = res.data[0].name
      this.categories = res.data
    });
  }

  changeDiscussion(catName:any, catId:any) {
    this.activeLink = catName
    this.getForum(catId);
  }

  getForum(catId:any) {
    this.donateService.getDonateList(catId).subscribe(res => {
      console.log(res);
      this.forumList = res.data
    });
  }

  get fvalues(){
    return this.form.controls;
  }

  //submit discussion
  submitDiscussion() {
    console.log(this.form);
    this.isSubmitted=true;
    if(this.form.invalid){
      return
    } else {

      const formData:FormData = new FormData();
      formData.append("title",this.fvalues.title.value)
      formData.append("categoryId",this.fvalues.categoryId.value)
      formData.append("body",this.fvalues.body.value)
      formData.append("image",this.fvalues.img.value)
      this.donateService.addDonate(formData).subscribe(result=>{
        if(result.status){
          Swal.fire({
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            let closeModalButton: HTMLElement = document.getElementById('close-modal-button') as HTMLElement
            closeModalButton.click();
            this.getForum('');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            showConfirmButton: false,
            timer: 3000
          });
        }
      })

    }
  }

  onImgFileChange(event:any){
    if (event.target.files.length > 0) {

      const file = event.target.files[0];
      this.form.get('img')!.setValue(file);

    }

  }

}
