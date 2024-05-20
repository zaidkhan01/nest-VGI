import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';
import { BookController } from './Book/book.controller';
import { AppController } from './app.controller';

@Module({
  imports: [BookModule],
  controllers: [BookController,AppController],
  providers: [],
})
export class AppModule {}
