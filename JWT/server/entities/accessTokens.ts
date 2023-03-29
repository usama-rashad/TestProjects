import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "accesstokens" })
export class AccessToken {
  @PrimaryGeneratedColumn({ type: "int" })
  serial: number;

  @Column({ type: "varchar", length: 200 })
  username: string;

  @Column({ type: "varchar", length: 200 })
  accessToken: string;
}
