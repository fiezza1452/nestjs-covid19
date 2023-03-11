import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    isNumberString,
    IsNumberString,
    IsIn,
    Length,
  } from 'class-validator';
export class CreateHospitalDto {
    hospital_id: number;

    @IsString()
    hospital_name: string;
}
