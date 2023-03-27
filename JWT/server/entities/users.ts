import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  serial: number;

  @Column({ type: "varchar", width: 200 })
  username: string;

  @Column({ type: "varchar", width: 200 })
  password: string;
}
