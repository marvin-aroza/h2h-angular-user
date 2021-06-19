import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { PostService } from 'src/app/shared/Services/post.service'
import { CategoryService } from 'src/app/shared/Services/category.service'
import { AuthService } from 'src/app/shared/Services/auth.service'
import Swal from 'sweetalert2'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  Form!:FormGroup
  isSubmitted=false;
  isLoaded=false;
  imgFile:any = '';
  catList:any

  constructor(
    private fb:FormBuilder,
    private postservice:PostService,
    private categoryService:CategoryService,
    private router:Router,
    private authservice:AuthService
    ) {
      window.scroll(0,0);
      this.getCategroy();
    }

  ngOnInit(): void {
    this.createAddPostForm()
  }

  getCategroy() {
    this.categoryService.getCategory().subscribe(res => {
      console.log(res);
      this.catList = res.data
    });
  }

  createAddPostForm(){
    this.Form = this.fb.group({
      title:['',Validators.required],
      subtitle:[''],
      desc:[''],
      categoryId:[''],
      img:[''],
      video:['']
    })
    this.isLoaded = true
  }

  get fvalues(){
    return this.Form.controls;
  }

  createPost(){
    this.isSubmitted=true;
    if(this.Form.invalid){
      return
    } else {

      const formData:FormData = new FormData();
      formData.append("title",this.fvalues.title.value)
      formData.append("subtitle",this.fvalues.subtitle.value)
      formData.append("description",this.fvalues.desc.value)
      formData.append("category_id",this.fvalues.categoryId.value)
      //Get user id from local storage
      let uservalues = this.authservice.getUserDetails();
      formData.append("createdBy",uservalues?.id)
      formData.append("image",this.fvalues.img.value)
      formData.append("video",this.fvalues.video.value)

      this.postservice.addPost(formData).subscribe((result:any)=>{
        if(result.status){
          // window.location.reload();
          Swal.fire({
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
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
      })

    }
  }

  onImgFileChange(event:any){
    if (event.target.files.length > 0) {

      const file = event.target.files[0];
      this.Form.get('img')!.setValue(file);

    }

  }

  onVideoFileChange(event:any){
    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      this.Form.get('video')!.setValue(file);
    }
  }


}
