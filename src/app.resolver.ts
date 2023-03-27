import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { User, UserInput } from './graphql.schema';

@Resolver('users')
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query()
  getAllUsers(): User[] {
    return this.appService.getUsers();
  }

  @Query()
  getUserById(@Args('id') id: string): User {
    return this.appService.getUserById(id);
  }

  @Mutation()
  createUser(@Args('user') user: UserInput): User {
    return this.appService.createUser(user);
  }
}
