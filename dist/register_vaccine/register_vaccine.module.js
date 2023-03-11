"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterVaccineModule = void 0;
const common_1 = require("@nestjs/common");
const register_vaccine_service_1 = require("./register_vaccine.service");
const register_vaccine_controller_1 = require("./register_vaccine.controller");
const register_vaccine_entity_1 = require("./entities/register_vaccine.entity");
const hospital_entity_1 = require("../hospital/entities/hospital.entity");
const typeorm_1 = require("@nestjs/typeorm");
let RegisterVaccineModule = class RegisterVaccineModule {
};
RegisterVaccineModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([register_vaccine_entity_1.RegisterVaccine, hospital_entity_1.Hospital])],
        controllers: [register_vaccine_controller_1.RegisterVaccineController],
        providers: [register_vaccine_service_1.RegisterVaccineService]
    })
], RegisterVaccineModule);
exports.RegisterVaccineModule = RegisterVaccineModule;
//# sourceMappingURL=register_vaccine.module.js.map