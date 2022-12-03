import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Userauth {
	@PrimaryGeneratedColumn({type: "int"})
	id: number;

	@Column({type: "varchar", length: 200})
	name: string;

	@Column({type: "varchar", length: 200})
	email: string;

	@Column({type: "varchar", length: 45})
	username: string;

	@Column({type: "varchar", length: 200})
	password: string;
}
