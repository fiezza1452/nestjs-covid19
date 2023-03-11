"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterVaccineService = void 0;
const common_1 = require("@nestjs/common");
const register_vaccine_entity_1 = require("./entities/register_vaccine.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
const hospital_entity_1 = require("../hospital/entities/hospital.entity");
let RegisterVaccineService = class RegisterVaccineService {
    constructor(RegisterVaccinesRepository, dataSource) {
        this.RegisterVaccinesRepository = RegisterVaccinesRepository;
        this.dataSource = dataSource;
    }
    async create(createRegisterVaccineDto) {
        const hospital = await this.dataSource.query('select count(*) as count from hospital where hospital_id = ?', [createRegisterVaccineDto.hospital_id]);
        if (parseInt(hospital[0].count) > 0) {
            return this.RegisterVaccinesRepository.save(createRegisterVaccineDto);
        }
        else {
            throw new common_2.HttpException('ไม่พบโรงพยาบาล', common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return await this.RegisterVaccinesRepository.createQueryBuilder().select('register_vaccine').from(register_vaccine_entity_1.RegisterVaccine, 'register_vaccine')
            .innerJoinAndMapOne('register_vaccine.hospital_id', hospital_entity_1.Hospital, 'hospital', 'register_vaccine.hospital_id = hospital.hospital_id').getMany();
    }
    async findOne(id) {
        return await this.RegisterVaccinesRepository.createQueryBuilder().select('register_vaccine').from(register_vaccine_entity_1.RegisterVaccine, 'register_vaccine')
            .innerJoinAndMapOne('register_vaccine.hospital_id', hospital_entity_1.Hospital, 'hospital', 'register_vaccine.hospital_id = hospital.hospital_id')
            .where("register_vaccine.id= :id", { id: id }).getOne();
    }
    async update(id, updateRegisterVaccineDto) {
        const hospital = await this.dataSource.query('select count(*) as count from hospital where hospital_id = ?', [updateRegisterVaccineDto.hospital_id]);
        if (parseInt(hospital[0].count) > 0) {
            return this.RegisterVaccinesRepository.update(id, updateRegisterVaccineDto);
        }
        else {
            throw new common_2.HttpException('ไม่พบโรงพยาบาล', common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        await this.RegisterVaccinesRepository.delete(id);
    }
};
RegisterVaccineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(register_vaccine_entity_1.RegisterVaccine)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], RegisterVaccineService);
exports.RegisterVaccineService = RegisterVaccineService;
//# sourceMappingURL=register_vaccine.service.js.map