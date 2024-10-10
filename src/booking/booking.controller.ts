import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  @Get(':id')
  find(@Param('id') id: number) {
    return this.bookingService.getBook(+id);
  }

  @Get()
  findAll() {
    return this.bookingService.getAllBooks();
  }

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.postBooks(createBookingDto);
  }
}
