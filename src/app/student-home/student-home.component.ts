import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  username = this.authService._userName.value || window.localStorage.getItem('username');
  userClass = this.authService._studentClass.value || window.localStorage.getItem('class');
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
