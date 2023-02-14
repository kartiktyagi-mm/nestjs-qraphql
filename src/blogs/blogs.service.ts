import { Injectable } from '@nestjs/common';
import { AUTHORS } from 'src/mocks/authors.mock';
import { CreateAuthorDto } from './dtos/create-author.dto';
import { Author } from './models/authors.model';

@Injectable()
export class BlogsService {
  authors = AUTHORS;

  async getAuthors() {
    return this.authors;
  }

  async getAuthor(id: number) {
    return this.authors.find((author) => author.id === id);
  }

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author[]> {
    const lastAuthor = this.authors.slice(-1).pop();

    const newAuthor: Author = {
      id: lastAuthor?.id + 1,
      firstName: createAuthorDto?.firstName,
      lastName: createAuthorDto?.lastName,
      email: createAuthorDto?.email,
      phoneNumber: createAuthorDto?.phoneNumber,
    };

    this.authors.push(newAuthor);
    return this.authors;
  }

  async updateAuthor(id: number, createAuthorDto: CreateAuthorDto) {
    const author = this.authors?.find((a) => a.id === id);
    author.firstName = createAuthorDto?.firstName;
    author.lastName = createAuthorDto?.lastName;
    author.email = createAuthorDto?.email;
    return this.authors;
  }

  async deleteAuthor(id: number) {
    const author = this.authors?.find((a) => a.id === id);
    const index = this.authors.indexOf(author);
    this.authors.splice(index, 1);
    return this.authors;
  }
}
