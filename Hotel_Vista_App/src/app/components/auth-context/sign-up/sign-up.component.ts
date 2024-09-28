import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../../Services/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm= new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router ,private service:RegistrationService) { }

  ngOnInit(): void {
  }

  signUp() {

    this.service.signUp(
      this.signupForm.get('name')?.value,
      this.signupForm.get('email')?.value,
      this.signupForm.get('phone')?.value,
      this.signupForm.get('password')?.value
    ).subscribe(response=>{
      alert("Success......")
      console.log(response)
      this.router.navigateByUrl('/auth-context/login').catch(isNavigated=>{

      }).catch(navigateError=>{

      });
      this.signupForm.reset()
    },error => {
      console.log(error)
    })

  }
}
