import { Injectable } from '@angular/core';
import { User } from 'src/app/models/interfaces/user.model';
import userList from '../../user-list.json';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getData(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(function () {
        return resolve(userList);
      }, 500);
    });
  }
}
