import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  className:string = "";
  constructor(
    public dialogRef: MatDialogRef<AddClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fbService:FirebaseService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.className = this.data.class;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onclick() {
    console.log(this.data.action);
    (this.data.action == "create") ? this.addClass() : this.updateClass(); 
  }

  async addClass(){
    console.log(this.className);
    await this.fbService.addClass(this.className);
    this.dialogRef.close();
  }

  async updateClass(){
    await this.fbService.updateClass(this.data.id,this.className);
    this.dialogRef.close();
  }

}
