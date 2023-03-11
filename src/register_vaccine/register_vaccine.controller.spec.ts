import { Test, TestingModule } from '@nestjs/testing';
import { RegisterVaccineController } from './register_vaccine.controller';
import { RegisterVaccineService } from './register_vaccine.service';

describe('RegisterVaccineController', () => {
  let controller: RegisterVaccineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterVaccineController],
      providers: [RegisterVaccineService],
    }).compile();

    controller = module.get<RegisterVaccineController>(RegisterVaccineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
