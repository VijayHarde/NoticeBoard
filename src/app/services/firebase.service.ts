import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { NOTICE } from '../model/notice.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  projectName:string = "NoticeBoard";

  constructor(private afs:AngularFirestore,private authService:AuthService) { }

  // User
   async getCurrentUserInfo(uid:string){
    let data = await  this.afs.collection(`/users/`).doc(uid).get().toPromise();
    return data?.data();
  }

  addCurrentUserInfo(user:any,userId:string) {
    return this.afs.collection(`users`).doc(userId).set(user)
  }
// Class
  addClass(className:string){
    return this.afs.collection(`class`).doc().set({class:className,createdAt:new Date(),createdBy:this.authService._userName.value});
  }

  getClass(){
    return this.afs.collection(`/class/`).valueChanges({idField:'id'});
  }

  updateClass(id:string,className:string){
    return this.afs.doc(`/class/${id}`).update({class:className,createdAt:new Date(),createdBy:this.authService._userName.value});
  }

  deleteClass(id:string) {
    return this.afs.firestore.doc(`/class/${id}/`).delete();
  }

  // Notice
  addNotice(notice:NOTICE){
    return this.afs.collection(`notice`).doc().set(notice);
  }

  getNotice(){
    return this.afs.collection(`/notice/`).valueChanges({idField:'id'}) as Observable<NOTICE[]>; 
  }

  updateNotice(id:string,notice:NOTICE){
    return this.afs.doc(`/notice/${id}`).update(notice);
  }

  deleteNotice(id:string) {
    return this.afs.firestore.doc(`/notice/${id}/`).delete();
  }


}
