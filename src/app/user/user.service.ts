import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  size = 8;

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location,gender&results=' + this.size + '&nat=gb').pipe(
      map(response => response.json()),
      map(response => response.results),
      map(users => {
        return users.map(user => {
          return {
            name: user.name.first + ' ' + user.name.last,
            image: user.picture.large,
            geo: user.location.city + ' ' + user.location.state + ' ' + user.location.street,
            gender: user.gender
          };
        });
      })
    );
  }

  setSize(size) {
    this.size = size;
  }

}
