import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/shared/Services/auth.service'
import { ModalService } from 'src/app/shared/Services/modal.service'

@Injectable({
  providedIn: 'root'
})
export class UesrAuthGuard implements CanActivate {

  constructor(public router: Router, private authservice:AuthService, public modalService: ModalService,) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let userDetails = this.authservice.getUserDetails();
      //let userCheck = false; //Check the token details here from localStorage... return false if not present if present return true
      if(Object.keys(userDetails).length > 0) {

        return true;
      }
      this.modalService.login();
    return false;
  }

}
