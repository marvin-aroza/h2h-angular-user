import { Component, OnInit } from '@angular/core';

//modules
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';

//services
import { CategoryService } from 'src/app/shared/Services/category.service'
import { ForumService } from 'src/app/shared/Services/forum.service'
import { AuthService } from 'src/app/shared/Services/auth.service'

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
  form2!: FormGroup
  formLoaded:Boolean = false
  form2Loaded:Boolean = false
  isSubmitted=false;
  isSubmitted2=false;
  isLoaded=false;
  imgFile:any = '';
  imgName:any
  imgName2:any
  userId = this.authService.getUserDetails()?.id
  forumData:any
  updateId:any
  // public Editor = ClassicEditor;

  constructor(
    private categoryService: CategoryService,
    private forumService:ForumService,
    private authService:AuthService,
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

  createForm2() {
    console.log("image", this.forumData.image);
    this.form2 = this.fb.group({
      title: [this.forumData.title, Validators.required],
      categoryId: [this.forumData.category[0]._id, Validators.required],
      body: [this.forumData.body, Validators.required],
      img: [this.forumData.image]
    });
    this.form2Loaded = true;
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
    this.forumService.getForumList(catId).subscribe(res => {
      console.log(res);
      this.forumList = res.data
    });
  }

  get fvalues(){
    return this.form.controls;
  }

  get fvalues2(){
    return this.form2.controls;
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
      this.forumService.addForum(formData).subscribe(result=>{
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

  //submit discussion
  updateDiscussion() {
    console.log(this.fvalues2.img.value);
    this.isSubmitted2=true;
    if(this.form2.invalid){
      return
    } else {

      const formData:FormData = new FormData();
      formData.append("title",this.fvalues2.title.value)
      formData.append("categoryId",this.fvalues2.categoryId.value)
      formData.append("body",this.fvalues2.body.value)
      formData.append("image",this.fvalues2.img.value)
      this.forumService.updateForum(this.updateId,formData).subscribe(result=>{
        if(result.status){
          Swal.fire({
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            let closeModalButton: HTMLElement = document.getElementById('close-modal-button2') as HTMLElement
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
    console.log(event.target.files[0].name);
    if (event.target.files.length > 0) {
      this.imgName = event.target.files[0].name
      const file = event.target.files[0];
      this.form.get('img')!.setValue(file);

    }

  }

  onImg2FileChange(event:any){
    console.log(event.target.files[0].name);
    if (event.target.files.length > 0) {
      this.imgName2 = event.target.files[0].name
      console.log(event.target.files[0].name);
      const file = event.target.files[0];
      this.form2.get('img')!.setValue(file);

    }

  }

  editForum(id:any) {
    console.log(id);
    this.updateId = id
    this.forumService.getForumbyId(id).subscribe(res => {
      console.log(res);
      this.forumData = res.data[0]
      this.imgName2 = this.forumData.image
      this.createForm2();
    });
  }

  onReady(event:any) {

  }

}
