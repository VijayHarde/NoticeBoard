import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { NOTICE } from 'src/app/model/notice.model';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent implements OnInit {

  allClass$:Observable<any[]> = this.fbService.getClass();
  selectedClass:string = "";

  title:string = "";
  discription:string = "";
  class:string = "";
  expiryDate:string = "";
  createBy:string = this.authService._userName.value;
  constructor(
    private authService:AuthService,
    private fbService:FirebaseService,
    public dialogRef: MatDialogRef<AddNoticeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.discription = this.data.discription;
    this.class = this.data.class;
    this.expiryDate = this.data.expiryDate;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onclick() {
    console.log(this.data.action);
    (this.data.action == "create") ? this.addNotice() : this.updateNotice(); 
  }

  async addNotice(){
    // console.log(this.className);
    let data:NOTICE = {
      heading: this.title,
      discription: this.discription,
      class:this.class,
      expiryDate: this.expiryDate,
      createdBy:this.createBy
    }
    await this.fbService.addNotice(data);
    // this.msgServie.add({key: 'myKey1', severity:'success', summary: 'Sucessful', detail: 'Notice Added Sucessfully'});
    this.dialogRef.close();
  }

  async updateNotice(){
    // await this.fbService.updateClass(this.data.id,this.className);
    this.dialogRef.close();
  }




}
