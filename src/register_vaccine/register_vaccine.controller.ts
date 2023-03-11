import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegisterVaccineService } from './register_vaccine.service';
import { CreateRegisterVaccineDto } from './dto/create-register_vaccine.dto';
import { UpdateRegisterVaccineDto } from './dto/update-register_vaccine.dto';

@Controller('register-vaccine')
export class RegisterVaccineController {
  constructor(
    private readonly registerVaccineService: RegisterVaccineService,
  ) {}

  @Post()
  create(@Body() createRegisterVaccineDto: CreateRegisterVaccineDto) {
    
      return this.registerVaccineService.create(createRegisterVaccineDto);
    
  }

  @Get()
  findAll() {
    return this.registerVaccineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerVaccineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRegisterVaccineDto: UpdateRegisterVaccineDto,
  ) {
    return this.registerVaccineService.update(+id, updateRegisterVaccineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerVaccineService.remove(id);
  }
}
