import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, ignoreElements, Observable, of } from 'rxjs';
import { AddClassComponent } from '../components/add-class/add-class.component';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-all-class',
  templateUrl: './all-class.component.html',
  styleUrls: ['./all-class.component.scss']
})
export class AllClassComponent implements OnInit {

  allClass$:Observable<any[]> = this.fbService.getClass();
  allClassError$:Observable<unknown> = this.allClass$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );
  constructor(private fbService:FirebaseService,private dialog:MatDialog) {
    this.allClass$.subscribe((res) => {
      console.log(res);
    })
   }

  ngOnInit(): void {
  }

  addClass(){
    const dialogRef = this.dialog.open(AddClassComponent, {
      data: {class: "", createAt: "", id:"",action:"create"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  updateClass(item:any){
    const dialogRef = this.dialog.open(AddClassComponent, {
      data: {class: item.class, createAt: item.createAt, id:item.id,action:"update"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  async deleteClass(item:any){
    await this.fbService.deleteClass(item.id);
  }

}
