import { Component, OnInit } from '@angular/core';

//services
import { UserService } from 'src/app/shared/Services/user.service'
import { AuthService } from 'src/app/shared/Services/auth.service'
import { ContactService } from 'src/app/shared/Services/contact.service'
import { PostService } from 'src/app/shared/Services/post.service'

//Enums
import { Gender } from 'src/app/shared/Constants/gender'

//Required imports
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //variables
  user = this.authService.getUserDetails();
  userDetails:any
  contactList:any = []
  postList:any = []
  gender = Gender
  form!: FormGroup;
  formLoaded = false;
  isFormSubmitted = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private ContactService: ContactService,
    private postService: PostService,
    private fb: FormBuilder,
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    this.getUserDetails();
    this.getContactList();
    this.getUserPostList();
  }

  getUserDetails() {
    this.userService.getUserById(this.user.id).subscribe(res => {
      console.log(res);
      this.userDetails = res.data
      this.createForm()
    });
  }

  getContactList() {
    this.ContactService.getContactListForUser().subscribe(res => {
      console.log(res);
      this.contactList = res.data
    });
  }

  getUserPostList() {
    this.postService.getPostUserList().subscribe(res => {
      console.log(res);
      this.postList = res.data
    });
  }

   //Create the form instance
   createForm() {
    this.form = this.fb.group({
      firstname: [this.userDetails.firstname, Validators.required],
      lastname: [this.userDetails.lastname, Validators.required],
      username: [this.userDetails.username, Validators.required],
      email: [this.userDetails.email, [Validators.required, Validators.email]],
      phone: [this.userDetails.phone, Validators.required],
      gender: [this.userDetails.gender, Validators.required]
    })
    this.formLoaded = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  update() {
    console.log(this.form);

    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    } else {
      //request body for Registration
      let formData = {
        firstname: this.f.firstname.value,
        lastname: this.f.lastname.value,
        username: this.f.username.value,
        email: this.f.email.value,
        phone: this.f.phone.value,
        gender: this.f.gender.value
      }
console.log(formData);
      //Registration service call to send request to server
      this.userService.updateUser(formData,this.user.id).subscribe(res => {
        console.log(res);
        if(res.status) {
          // window.location.reload();
          Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              // this.modalService.login();
              this.ngOnInit()
            });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  }

}
