import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Hospital } from './entities/hospital.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital)
    private HospitalsRepository: Repository<Hospital>,
  ) {}
  create(createHospitalDto: CreateHospitalDto) {
    return this.HospitalsRepository.save(createHospitalDto);
  }

  findAll(): Promise<Hospital[]> {
    return this.HospitalsRepository.find();
  }

  findOne(hospital_id: number): Promise<Hospital> {
    return this.HospitalsRepository.findOneBy({ hospital_id });
  }


  update(hospital_id: number, updateHospitalDto: UpdateHospitalDto) {
    return this.HospitalsRepository.update(hospital_id, updateHospitalDto);
    // return `This action updates a #${hospital_id} Hospital`;
  }

  async remove(hospital_id: string): Promise<void> {
    await this.HospitalsRepository.delete(hospital_id);
  }
}
