import { BadRequestException,UseFilters ,Body,Controller,Get, Param, ParseBoolPipe, Post, ValidationPipe, UseGuards } from "@nestjs/common";

import { BookDto } from "./dto/book.dto";
import { BookCustomExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./book.guard";

@Controller("book")
export class BookController{

// @Get("/:id")
// findBookById(@Param("id",ParseBoolPipe) id:number):string{
    
//     console.log(id,typeof(id));
//     return "book by id";
// }

// @Post("/add")
// addBook(@Body(new ValidationPipe()) book:BookDto):string{
//     //  console.log(value,typeof(value));
//     return "add book";

// }
// @Get("")
// @UseFilters(BookCustomExceptionFilter)
// helloBookApi():string{
//     throw new BadRequestException();
     
//     return "this is the books api";
// }

@Get('/findAll')
@UseGuards(new BookGuard())
findAllBooks():string{
    return 'this api return all books';
}


@Post('/add')
addBook():string{
    return 'this api will add book';
}
}


