import { Test, TestingModule } from '@nestjs/testing';
import { RegisterVaccineService } from './register_vaccine.service';

describe('RegisterVaccineService', () => {
  let service: RegisterVaccineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterVaccineService],
    }).compile();

    service = module.get<RegisterVaccineService>(RegisterVaccineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
