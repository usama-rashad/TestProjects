import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "RefreshTokens" })
export class RefreshToken {
  @PrimaryGeneratedColumn({ type: "int" })
  serial: number;

  @Column({ type: "varchar", length: 200 })
  username: string;

  @Column({ type: "varchar", length: 200 })
  refreshToken: string;
}
