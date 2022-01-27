import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { CustomerAdressDto } from './CustomerAdress.dto';

export class CreateCustomerDto {
  /** Implemet validation Using validator-class */
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  /** To validate nested parameters */
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CustomerAdressDto)
  address: CustomerAdressDto;
}
