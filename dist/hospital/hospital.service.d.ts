import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Hospital } from './entities/hospital.entity';
import { Repository } from 'typeorm';
export declare class HospitalService {
    private HospitalsRepository;
    constructor(HospitalsRepository: Repository<Hospital>);
    create(createHospitalDto: CreateHospitalDto): Promise<CreateHospitalDto & Hospital>;
    findAll(): Promise<Hospital[]>;
    findOne(hospital_id: number): Promise<Hospital>;
    update(hospital_id: number, updateHospitalDto: UpdateHospitalDto): Promise<import("typeorm").UpdateResult>;
    remove(hospital_id: string): Promise<void>;
}
