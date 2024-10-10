import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
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

  @Patch('/:id')
  update(@Param('id') id: number, @Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.patchBooks(+id, createBookingDto);
  }

  @Delete()
  deleteAll() {
    return {};
  }

  Delete(@Param('id') id: number) {
    return this.bookingService.deleteBook(+id);
  }
}
