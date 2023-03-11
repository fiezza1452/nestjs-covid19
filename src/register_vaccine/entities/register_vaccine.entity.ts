import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  
} from 'typeorm';
import { Hospital } from 'src/hospital/entities/hospital.entity';
@Entity()
export class RegisterVaccine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prefix: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  card: string;

  @Column()
  age: number;

  @Column()
  tel: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  hospital_id : number

  @Column()
  datetime : Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

 

 
}
