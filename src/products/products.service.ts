import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

const arr:CreateProductDto[]=[]
@Injectable()
export class ProductsService {

  private products=[{id:0,name:'gg'},{id:1,name:'ggl'}]
  getProducts(){
    return this.products
  }

  create(createProductDto: CreateProductDto) {
    arr.push(createProductDto)
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
