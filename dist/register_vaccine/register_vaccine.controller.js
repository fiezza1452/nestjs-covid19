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
exports.RegisterVaccineController = void 0;
const common_1 = require("@nestjs/common");
const register_vaccine_service_1 = require("./register_vaccine.service");
const create_register_vaccine_dto_1 = require("./dto/create-register_vaccine.dto");
const update_register_vaccine_dto_1 = require("./dto/update-register_vaccine.dto");
let RegisterVaccineController = class RegisterVaccineController {
    constructor(registerVaccineService) {
        this.registerVaccineService = registerVaccineService;
    }
    create(createRegisterVaccineDto) {
        return this.registerVaccineService.create(createRegisterVaccineDto);
    }
    findAll() {
        return this.registerVaccineService.findAll();
    }
    findOne(id) {
        return this.registerVaccineService.findOne(+id);
    }
    update(id, updateRegisterVaccineDto) {
        return this.registerVaccineService.update(+id, updateRegisterVaccineDto);
    }
    remove(id) {
        return this.registerVaccineService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_register_vaccine_dto_1.CreateRegisterVaccineDto]),
    __metadata("design:returntype", void 0)
], RegisterVaccineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisterVaccineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegisterVaccineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_register_vaccine_dto_1.UpdateRegisterVaccineDto]),
    __metadata("design:returntype", void 0)
], RegisterVaccineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegisterVaccineController.prototype, "remove", null);
RegisterVaccineController = __decorate([
    (0, common_1.Controller)('register-vaccine'),
    __metadata("design:paramtypes", [register_vaccine_service_1.RegisterVaccineService])
], RegisterVaccineController);
exports.RegisterVaccineController = RegisterVaccineController;
//# sourceMappingURL=register_vaccine.controller.js.map