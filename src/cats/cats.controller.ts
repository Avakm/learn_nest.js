import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  Res,
  HttpException,
  UseFilters,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import {
  CreateCatDto,
  UpdateCatDto,
  ListAllEntities,
} from './dto/create-cat.dto';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { JoiValidationPiPe } from './ValidationPipe/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UsePipes(new JoiValidationPiPe(CreateCatDto))
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get(':id')
  async findOne(@Query('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, error: 'This is a custom message' },
      HttpStatus.FORBIDDEN,
    );
    return this.catsService.findAll();
  }
}
