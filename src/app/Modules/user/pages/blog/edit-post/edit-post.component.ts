import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { PostService } from 'src/app/shared/Services/post.service'
import { CategoryService } from 'src/app/shared/Services/category.service'
import { AuthService } from 'src/app/shared/Services/auth.service'
import Swal from 'sweetalert2'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  Form!:FormGroup
  isSubmitted=false;
  isLoaded=false;
  imgFile:any = '';
  catList:any

  postId:any = this.route.snapshot.params.id
  postDetails:any

  constructor(
    private fb:FormBuilder,
    private postservice:PostService,
    private categoryService:CategoryService,
    private router:Router,
    private authservice:AuthService,
    private route: ActivatedRoute
    ) {
      window.scroll(0,0);
      this.getCategroy();
    }

  ngOnInit(): void {
    this.getPostList();
  }

  getCategroy() {
    this.categoryService.getCategory().subscribe(res => {
      console.log(res);
      this.catList = res.data
    });
  }

  getPostList() {
    this.postservice.getPostById(this.postId).subscribe(res => {
      console.log(res);
      this.postDetails = res.data[0]
      this.createAddPostForm()
    });
  }

  createAddPostForm(){
    this.Form = this.fb.group({
      title:[this.postDetails.title,Validators.required],
      subtitle:[this.postDetails.subtitle],
      desc:[this.postDetails.description],
      categoryId:[this.postDetails.category_id],
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

      this.postservice.updatePost(formData, this.postId).subscribe((result:any)=>{
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
