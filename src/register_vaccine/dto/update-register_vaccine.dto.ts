import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterVaccineDto } from './create-register_vaccine.dto';

export class UpdateRegisterVaccineDto extends PartialType(CreateRegisterVaccineDto) {}
