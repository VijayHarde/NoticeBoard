import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassComponent } from '../components/add-class/add-class.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username = window.localStorage.getItem('username');
  userClass = window.localStorage.getItem('class');
  constructor(protected authService:AuthService) { }

  data = [
    {
      text: 'Class',
      img_path: '/assets/writing.png',
      navigate:'/all-class'
    },
    {
      text: 'Notice',
      img_path: '/assets/writing.png',
      navigate:'/all-notice'
    },
    // {
    //   text: 'Notice Notice',
    //   img_path: '/assets/writing.png',
    // }
  ];

  ngOnInit(): void {
  }

  // onCall(item:any){
  //   switch(item.text){
  //     case 'Add Class':
  //       this.addClass();
  //       console.log("Add Class");
  //       break;
  //     case 'Add Notice':
  //       console.log("Add Notice");
  //       break;
  //     case 'Notice Notice':
  //       console.log("Notice Notice");
  //       break;
  //   }
  // }

}
