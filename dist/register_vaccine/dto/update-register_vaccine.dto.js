"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegisterVaccineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_register_vaccine_dto_1 = require("./create-register_vaccine.dto");
class UpdateRegisterVaccineDto extends (0, mapped_types_1.PartialType)(create_register_vaccine_dto_1.CreateRegisterVaccineDto) {
}
exports.UpdateRegisterVaccineDto = UpdateRegisterVaccineDto;
//# sourceMappingURL=update-register_vaccine.dto.js.map