import { IsString, IsInt } from 'class-validator';

// eslint-disable-next-line prettier/prettier
export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}

export class ListAllEntities {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
