import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class User {
    @PrimaryColumn('uuid')
    id: string = uuidv4();

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    gender: string;

    @Column({ nullable: true })
    phoneNumber?: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    picture?: string;

    @CreateDateColumn({ type: 'timestamp with time zone' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updatedAt: Date;
}
