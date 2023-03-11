import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    create(createHospitalDto: CreateHospitalDto): Promise<CreateHospitalDto & import("./entities/hospital.entity").Hospital>;
    findAll(): Promise<import("./entities/hospital.entity").Hospital[]>;
    findOne(id: string): Promise<import("./entities/hospital.entity").Hospital>;
    update(id: string, updateHospitalDto: UpdateHospitalDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
