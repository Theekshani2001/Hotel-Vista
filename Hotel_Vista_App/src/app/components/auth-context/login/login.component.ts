import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {RegistrationService} from "../../../Services/registration.service";
import {Admin} from "../../../DTO/admin";
import {Room} from "../../../DTO/room";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })



  constructor(private router:Router ,private service : RegistrationService) { }

  ngOnInit(): void {
  }


  login() {

    this.service.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
      alert("Success......")
      console.log(response)
      this.router.navigateByUrl('/dashboard').catch(isNavigated=>{

      }).catch(navigateError=>{

      });
      this.loginForm.reset()
    },error => {
      alert("Check your email and password....")
      console.log(error)
      this.loginForm.reset()
    })

  }


}
