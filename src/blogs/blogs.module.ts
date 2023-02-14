import { Module } from '@nestjs/common';
import { BlogsResolver } from './blogs.resolver';
import { BlogsService } from './blogs.service';

@Module({
  providers: [BlogsResolver, BlogsService]
})
export class BlogsModule {}
