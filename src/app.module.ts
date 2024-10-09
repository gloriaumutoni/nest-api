import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [ProductsModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
