import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Register {
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
  
    @Column({ type: 'datetime'})
    created_at: Date;

    @Column({ type: 'datetime'}) 
    updated_at: Date;
}
