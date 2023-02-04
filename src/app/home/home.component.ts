import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data = [
    {
      text: 'Create Notice',
      img_path: '/assets/user-details/ViewDetails.png',
      navigate: './view-details',
    },
    {
      text: 'View Notice',
      img_path: '/assets/user-details/logs.png',
      navigate: './customer-logs',
    },
    {
      text: 'ALL Notice',
      img_path: '/assets/user-details/block.png',
      navigate: './block-unblock',
    },
    {
      text: 'My Notice',
      img_path: '/assets/user-details/subscription.png',
      navigate: './customer-subscription',
    },
  ];

  ngOnInit(): void {
  }

}
