import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class flightdata {
	@PrimaryGeneratedColumn({type: "int"})
	id: number;

	@Column({type: "varchar", length: 200})
	departure: string;

	@Column({type: "varchar", length: 200})
	destination: string;

	@Column({type: "int"})
	flightTimeInMins: number;
}
