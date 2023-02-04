import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _user = new BehaviorSubject<string | undefined>(undefined);
  // _userID = new BehaviorSubject<string>('');

  constructor(private auth:AngularFireAuth) { }

  async signIn(email:string,password:string){
    const user = await this.auth.signInWithEmailAndPassword(email,password);
    return user;
    // this._user
  }

  async signUp(email:string,password:string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
}
