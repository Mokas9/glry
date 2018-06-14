import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(users, value) {
    if (value === 'all') {
      return users.filter(user => {
        return user.gender.includes('male');
      });

    } else {
      return users.filter(user => {
        return user.gender === value;
      });

    }
  }

}
