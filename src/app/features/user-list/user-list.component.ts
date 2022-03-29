import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models/interfaces/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  loading = false;
  users!: User[];
  constructor(private usersService: UsersService, private router: Router) {}

  loadUsers() {
    this.loading = true;
    this.usersService.getData().then((value) => {
      this.users = value;
      this.loading = false;
    });
  }

  getDetails(id: number) {
    this.router.navigate(['user-details', id]);
  }

  ngOnInit(): void {}
}
