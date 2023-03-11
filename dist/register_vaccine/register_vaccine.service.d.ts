import { CreateRegisterVaccineDto } from './dto/create-register_vaccine.dto';
import { UpdateRegisterVaccineDto } from './dto/update-register_vaccine.dto';
import { RegisterVaccine } from './entities/register_vaccine.entity';
import { Repository, DataSource } from 'typeorm';
export declare class RegisterVaccineService {
    private RegisterVaccinesRepository;
    private dataSource;
    constructor(RegisterVaccinesRepository: Repository<RegisterVaccine>, dataSource: DataSource);
    create(createRegisterVaccineDto: CreateRegisterVaccineDto): Promise<CreateRegisterVaccineDto & RegisterVaccine>;
    findAll(): Promise<RegisterVaccine[]>;
    findOne(id: number): Promise<RegisterVaccine>;
    update(id: number, updateRegisterVaccineDto: UpdateRegisterVaccineDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
