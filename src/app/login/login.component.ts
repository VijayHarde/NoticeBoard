import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  signUpForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  screenType:'signin' | 'signup' = 'signin';
  // favoriteSeason: string | undefined;
  type: 'student' | 'professor' = 'student';
  loginType: string[] = ['Login As A Student','Login As Teacher'];

  constructor(private authService:AuthService,private router:Router,private msgServie:MessageService) {
   
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // handle the form submission here
    
  }
  submit(type:'signin' | 'signup'){
    console.log(type);
    console.log(this.type);
    if(type == 'signin'){
      // console.log(this.loginForm);
      this.signIn();

    }else {
      // console.log(this.signUpForm);
      this.signUp();
    }
  }

  signIn(){
    let email = this.loginForm.value.email!;
    let password = this.loginForm.value.password!;
    console.log("email",email);
    console.log("password",password);
    this.authService.signIn(email,password).then(res => {
      console.log("SignIN Sucess");
      this.msgServie.add({key: 'myKey1', severity:'success', summary: 'Sucessful', detail: 'Login Sucessfully'});
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      },500);
    }).catch(err => {
      console.log(err);
      this.msgServie.add({key: 'myKey1', severity:'error', summary: 'Failed', detail: 'Please check you email and password'});
    })
  }

  signUp(){
    let email = this.signUpForm.value.email!;
    let password = this.signUpForm.value.password!;
    console.log("email",email);
    console.log("password",password);
    this.authService.signUp(email,password).then(res => {
      console.log("SignUP Sucess");
      this.screenType = 'signin';
      this.msgServie.add({key: 'myKey1', severity:'success', summary: 'Sign Up Sucessful', detail: 'Please Login'});
    }).catch(err => {
      console.log(err);
      this.msgServie.add({key: 'myKey1', severity:'error', summary: 'Sign Up Failed', detail: 'Sign Up Failed. Please Try After Some Time'});
    })
  }

}
