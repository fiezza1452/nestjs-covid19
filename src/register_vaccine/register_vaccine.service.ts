import { Injectable } from '@nestjs/common';
import { CreateRegisterVaccineDto } from './dto/create-register_vaccine.dto';
import { UpdateRegisterVaccineDto } from './dto/update-register_vaccine.dto';
import { RegisterVaccine } from './entities/register_vaccine.entity';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {HttpException,HttpStatus  } from '@nestjs/common'
import { Hospital } from 'src/hospital/entities/hospital.entity';
@Injectable()
export class RegisterVaccineService {
  constructor(
    @InjectRepository(RegisterVaccine)
    private RegisterVaccinesRepository: Repository<RegisterVaccine>,
    private dataSource: DataSource,
  ) {}
  async create(createRegisterVaccineDto: CreateRegisterVaccineDto) {
    const hospital = await this.dataSource.query(
      'select count(*) as count from hospital where hospital_id = ?',
      [createRegisterVaccineDto.hospital_id],
    );

    if (parseInt(hospital[0].count) > 0) {
      return this.RegisterVaccinesRepository.save(createRegisterVaccineDto);
    } else {
      throw new HttpException('ไม่พบโรงพยาบาล', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<RegisterVaccine[]> {
    return await this.RegisterVaccinesRepository.createQueryBuilder().select('register_vaccine').from(RegisterVaccine,'register_vaccine')
    .innerJoinAndMapOne('register_vaccine.hospital_id', Hospital, 'hospital', 'register_vaccine.hospital_id = hospital.hospital_id').getMany();
  }

  async findOne(id: number) {
    return await this.RegisterVaccinesRepository.createQueryBuilder().select('register_vaccine').from(RegisterVaccine,'register_vaccine')
    .innerJoinAndMapOne('register_vaccine.hospital_id', Hospital, 'hospital', 'register_vaccine.hospital_id = hospital.hospital_id')
    .where("register_vaccine.id= :id", { id: id }).getOne();
  }

  async update(id: number, updateRegisterVaccineDto: UpdateRegisterVaccineDto) {
    // return this.RegisterVaccinesRepository.update(id, updateRegisterVaccineDto);

    const hospital = await this.dataSource.query(
      'select count(*) as count from hospital where hospital_id = ?',
      [updateRegisterVaccineDto.hospital_id],
    );

    if (parseInt(hospital[0].count) > 0) {
      return this.RegisterVaccinesRepository.update(id, updateRegisterVaccineDto);
    } else {
      throw new HttpException('ไม่พบโรงพยาบาล', HttpStatus.BAD_REQUEST);
    }
    // return `This action updates a #${id} RegisterVaccine`;
  }

  async remove(id: string): Promise<void> {
    await this.RegisterVaccinesRepository.delete(id);
  }
}
