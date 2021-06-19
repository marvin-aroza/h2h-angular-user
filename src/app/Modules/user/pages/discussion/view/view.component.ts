import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ActivatedRoute } from '@angular/router'

//service
import { CommentService } from 'src/app/shared/Services/comment.service'
import { AuthService } from 'src/app/shared/Services/auth.service'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //variables
  forumId: any = this.route.snapshot.params.id
  form!:FormGroup
  isSubmitted=false;
  isLoaded=false;
  comments:any = []
  loggedInUser:any = this.authService.getUserDetails().id;

  constructor(
    public route:ActivatedRoute,
    private commentService: CommentService,
    private authService: AuthService,
    public fb:FormBuilder
  ) {
    window.scroll(0,0);
    console.log(this.forumId);
  }

  ngOnInit(): void {
    this.createForm();
    this.getForumComments();
  }

  createForm() {
    this.form = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  get fvalues(){
    return this.form.controls;
  }

  getForumComments() {
    this.commentService.getForumCommentList(this.forumId).subscribe((res:any) => {
      console.log(res);
      this.comments = res.data
    });
  }

  sendMessage() {
    console.log(this.form);
    this.isSubmitted=true;
    if(this.form.invalid){
      return
    } else {

      let formData = {
        forumId : this.forumId,
        comment: this.fvalues.comment.value
      }
      this.commentService.addForumComment(formData).subscribe(result=>{
        if(result.status){
          Swal.fire({
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.getForumComments();
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
