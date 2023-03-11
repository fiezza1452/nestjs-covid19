import { Module } from '@nestjs/common';
import { RegisterVaccineService } from './register_vaccine.service';
import { RegisterVaccineController } from './register_vaccine.controller';
import { RegisterVaccine } from './entities/register_vaccine.entity';
import { Hospital } from '../hospital/entities/hospital.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([RegisterVaccine,Hospital])],
  controllers: [RegisterVaccineController],
  providers: [RegisterVaccineService]
})
export class RegisterVaccineModule {}


