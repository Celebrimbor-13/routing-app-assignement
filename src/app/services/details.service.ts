import { Injectable } from '@angular/core';
import userDetaills from '../../user-details.json';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor() {}
  getDetailsById(id: number) {
    return userDetaills.find((element) => {
      return element.id === id;
    });
  }
}
