import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, ignoreElements, Observable, of } from 'rxjs';
import { AddNoticeComponent } from '../components/add-notice/add-notice.component';
import { NOTICE } from '../model/notice.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-all-notice',
  templateUrl: './all-notice.component.html',
  styleUrls: ['./all-notice.component.scss']
})
export class AllNoticeComponent implements OnInit {

  allNotice$:Observable<NOTICE[]> = this.fbService.getNotice();
  allNoticeError$:Observable<unknown> = this.allNotice$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  )
  constructor(private dialog:MatDialog,private fbService:FirebaseService) { }

  ngOnInit(): void {
  }

  addNotice(){
    const dialogRef = this.dialog.open(AddNoticeComponent, {
      data: {title: "",discription:"",createAt: "", id:"",expiry:"",action:"create"},
      width:"50%"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  updateNotice(item:any){
    console.log(item);
    const dialogRef = this.dialog.open(AddNoticeComponent, {
      data: {title: item.heading,discription:item.discription,createAt: new Date(), id:item.id,expiry:item.expiry,action:"update"},
      width:"50%"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

  deleteNotice(item:any) {
    console.log("COlled");
    this.fbService.deleteNotice(item.id);
  }

}
