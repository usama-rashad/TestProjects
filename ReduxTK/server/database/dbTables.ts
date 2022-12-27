import { dbDataSource } from "./dbConnection";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// Airline basic info
@Entity()
export class Airlines {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  iconURL: string;

  @Column()
  airlineHub: string;
}
