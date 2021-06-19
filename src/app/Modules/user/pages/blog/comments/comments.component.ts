import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

//service
import { PostService } from 'src/app/shared/Services/post.service'

import { FormBuilder,FormGroup,Validators } from '@angular/forms'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  //variables
  postId:any = this.route.snapshot.params.id
  postDetail:any
  Form!:FormGroup
  isSubmitted=false;
  isLoaded=false;
  commentList:any = []

  constructor(
    private route:ActivatedRoute,
    private postService:PostService,
    private fb:FormBuilder,
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    this.getPostDetails();
    this.createAddCommentForm();
    this.getCommentList();
  }

  getPostDetails() {
    this.postService.getPostById(this.postId).subscribe(res => {
      console.log(res);
      this.postDetail = res.data
    });
  }

  getCommentList() {
    this.postService.getComment(this.postId).subscribe(res => {
      console.log(res);
      this.commentList = res.data
    });
  }

  createAddCommentForm(){
    this.Form = this.fb.group({
      comment:['',Validators.required]
    })
    this.isLoaded = true
  }

  get fvalues(){
    return this.Form.controls;
  }

  createComment(){
    this.isSubmitted=true;
    if(this.Form.invalid){
      return
    } else {

      let formData = {
        postId: this.postId,
        comment: this.fvalues.comment.value
      }

      this.postService.addComment(formData).subscribe((result:any)=>{
        if(result.status){
          // window.location.reload();
          Swal.fire({
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            // window.location.reload();
            this.getCommentList();
            this.Form.reset()
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

}
