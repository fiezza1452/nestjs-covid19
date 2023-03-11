import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { RegisterVaccine } from './register_vaccine/entities/register_vaccine.entity';
import { Hospital } from './hospital/entities/hospital.entity';
import { RegisterModule } from './register/register.module';
import { RegisterVaccineModule } from './register_vaccine/register_vaccine.module';
import { HospitalModule } from './hospital/hospital.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'nestjs',
      entities: [User, RegisterVaccine, Hospital],
      synchronize: true,
    }),
    UsersModule,
    RegisterModule,
    RegisterVaccineModule,
    HospitalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
