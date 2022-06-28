import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsString, IsNotEmpty, MinLength } from 'class-validator';
@Entity("task_management")
export class Task {
    @PrimaryGeneratedColumn() id: number;
    @Column("name") @IsString() @IsNotEmpty() @MinLength(2) name: string;
    @Column("created_at") created_at: Date;
    @Column("updated_at") updated_at: Date;
}