import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';
import { BookController } from './Book/book.controller';

@Module({
  imports: [BookModule],
  controllers: [BookController],
  providers: [],
})
export class AppModule {}
