import { Module } from '@nestjs/common';
import { BlogUserController } from './blog-user.controller';
import { BlogUserService } from './blog-user.service';
import {BlogUserRepository} from "./blog-user.repository";

@Module({
  controllers: [BlogUserRepository],
  providers: [BlogUserRepository],
})
export class BlogUserModule {}
