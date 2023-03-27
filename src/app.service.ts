import { Injectable } from '@nestjs/common';
import { User } from './graphql.schema';

@Injectable()
export class AppService {
  users: User[] = [
    {
      _id: 'abc1',
      FirstName: 'FUser',
      LastName: 'LUser',
      Email: 'user@gmail.com',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    var filteredStudent = this.users.filter((_) => _._id === id)[0];
    return filteredStudent;
  }

  createUser(newUser: any): User {
    this.users.push(newUser);
    return newUser;
  }
}
