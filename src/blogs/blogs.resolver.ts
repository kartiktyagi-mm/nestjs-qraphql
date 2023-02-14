import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { CreateAuthorDto } from './dtos/create-author.dto';
import { Author } from './models/authors.model';

@Resolver()
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Query(() => [Author])
  async getAuthors() {
    return this.blogsService.getAuthors();
  }

  @Query(() => Author)
  async getAuthorById(@Args('id') id: number) {
    return this.blogsService.getAuthor(id);
  }

  @Mutation(() => [Author])
  async createAuthor(
    @Args('createAuthorDto') createAuthorDto: CreateAuthorDto,
  ) {
    return this.blogsService.createAuthor(createAuthorDto);
  }

  @Mutation(() => [Author])
  async updateAuthor(
    @Args('id') id: number,
    @Args('createAuthorDto') createAuthorDto: CreateAuthorDto,
  ) {
    return this.blogsService.updateAuthor(id, createAuthorDto);
  }

  @Mutation(() => [Author])
  async deleteAuthor(@Args('id') id: number) {
    return this.blogsService.deleteAuthor(id);
  }
}
