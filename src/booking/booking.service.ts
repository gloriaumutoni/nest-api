import { CreateBookingDto } from './dto/create-booking.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  books = [
    {
      id: 1,
      name: 'book1',
      author: 'author1',
    },
    {
      id: 2,
      name: 'book2',
      author: 'author2',
    },
  ];

  getBook(id: number) {
    if (!id) return this.books;
    return this.books.find((book) => book.id === id);
  }

  getAllBooks() {
    return this.books;
  }

  postBooks(body:CreateBookingDto){
  this.books.push(body)
  return body
  }

}
