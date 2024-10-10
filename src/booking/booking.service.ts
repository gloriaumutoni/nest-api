import { CreateBookingDto } from './dto/create-booking.dto';
import { Injectable } from '@nestjs/common';
import { UpdateBookingDto } from './dto/update-booking.dto';

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

  postBooks(body: CreateBookingDto) {
    this.books.push(body);
    return body;
  }

  patchBooks(id:number,updateBookingDto:UpdateBookingDto) {
    this.books.forEach((book) => {
      if (book.id === id) return { ...book, ...updateBookingDto };
      return book;
    });
  }

  deleteBook(id:number) {
    const book=this.books.filter(book=>book.id===id)
    return book
  }
}
