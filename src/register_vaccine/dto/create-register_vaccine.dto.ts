import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  isNumberString,
  IsNumberString,
  IsIn,
  Length,
  IsDateString
} from 'class-validator';
export class CreateRegisterVaccineDto {
  id: number;
  @IsString()
  @IsIn(['นาย', 'นาง', 'นางสาว'])
  prefix: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumberString()
  @Length(13)
  card: string;

  @IsNumber()
  age: number;

  @IsString()
  @Length(10)
  tel: string;

  @IsEmail()
  email: string;

  @IsNumber()
  hospital_id: number;

  @IsDateString()
  datetime: Date;
}
