import { RegisterVaccineService } from './register_vaccine.service';
import { CreateRegisterVaccineDto } from './dto/create-register_vaccine.dto';
import { UpdateRegisterVaccineDto } from './dto/update-register_vaccine.dto';
export declare class RegisterVaccineController {
    private readonly registerVaccineService;
    constructor(registerVaccineService: RegisterVaccineService);
    create(createRegisterVaccineDto: CreateRegisterVaccineDto): Promise<CreateRegisterVaccineDto & import("./entities/register_vaccine.entity").RegisterVaccine>;
    findAll(): Promise<import("./entities/register_vaccine.entity").RegisterVaccine[]>;
    findOne(id: string): Promise<import("./entities/register_vaccine.entity").RegisterVaccine>;
    update(id: string, updateRegisterVaccineDto: UpdateRegisterVaccineDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
