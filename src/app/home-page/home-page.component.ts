import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';
  gender = 'all';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>  this.users = users);
  }

  genderChange(gender) {

    if (gender === 'all') {
      this.gender = 'all';

    } else {
      this.gender = gender;

    }
  }

}
