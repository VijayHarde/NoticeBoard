import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {

  allClass$:Observable<any[]> = this.fbService.getClass();
  isLoading:boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  signUpForm = new FormGroup({
    email: new FormControl('', Validators.email),
    name:new FormControl(''),
    class: new FormControl(''),
    password: new FormControl(''),
  });

  screenType:'signin' | 'signup' = 'signin';
  // favoriteSeason: string | undefined;
  type: 'student' | 'professor' = 'student';
  loginType: string[] = ['Login As A Student','Login As Teacher'];

  constructor(private fbService:FirebaseService,private authService:AuthService,private router:Router,private msgServie:MessageService) {
   
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
    this.isLoading = true;
    let email = this.loginForm.value.email!;
    let password = this.loginForm.value.password!;

    this.authService.signIn(email,password).then(async(res) => {
      this.authService._userID.next(res.user?.uid as string);
      let userInfo = await this.fbService.getCurrentUserInfo(res.user?.uid!) as any;
      this.authService._userName.next(userInfo.name);
      this.authService._userType.next(userInfo.userType);
      this.authService._studentClass.next(userInfo.class);
      window.localStorage.setItem("username",userInfo.name)
      window.localStorage.setItem("class",userInfo.class)
      this.msgServie.add({key: 'myKey1', severity:'success', summary: 'Sucessful', detail: 'Login Sucessfully'});
      setTimeout(() => {
        this.isLoading = false;
        (this.authService._userType.value == "student") ? this.router.navigateByUrl('/student-home') : this.router.navigateByUrl('/home');
      },500);
    }).catch(err => {
      this.isLoading = false;
      this.msgServie.add({key: 'myKey1', severity:'error', summary: 'Failed', detail: 'Please check you email and password'});
    })
  }

  signUp(){
    this.isLoading = true;
    let email = this.signUpForm.value.email!;
    let password = this.signUpForm.value.password!;
    let name = this.signUpForm.value.name!;
    let className = this.signUpForm.value.class!;

    console.log("email",email);
    console.log("password",password);
    console.log("name",name);
    this.authService.signUp(email,password).then(async(res) => {
      console.log("SignUP Sucess");
      this.screenType = 'signin';
      let user = {
        email:email,
        date:new Date(),
        name:name,
        class:className,
        userType:this.type
      }
      this.isLoading = false;
     await this.fbService.addCurrentUserInfo(user,res.user?.uid!);
     await this.msgServie.add({key: 'myKey1', severity:'success', summary: 'Sign Up Sucessful', detail: 'Please Login'});
    }).catch(err => {
      this.isLoading = false;
      this.msgServie.add({key: 'myKey1', severity:'error', summary: 'Sign Up Failed', detail: 'Sign Up Failed. Please Try After Some Time'});
    })
  }

}
