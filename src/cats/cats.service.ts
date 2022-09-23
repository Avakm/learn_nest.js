import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findOne(id: number) {
    return this.cats[0];
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
