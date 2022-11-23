import Express from "express";
import BCrypt from "bcrypt";
import SQL from "mysql2";

/* This is the login loginActionController. It does the following :
1) Handles the login request by accepting the parameters :
  a) username
  b) password
*/

interface ILoginData extends SQL.RowDataPacket {
	username: string;
	password: string;
}

export const loginActionController = (
	req: Express.Request,
	res: Express.Response
) => {
	// Assign body parameters into data structure

	// Create the SQL connection
	const sqlConnection = SQL.createConnection({
		host: "127.0.0.1",
		port: 3307,
		user: "jwt",
		password: "1111",
		database: "data",
	});

	// Confirm if user exists
	let checkUserQuery = "SELECT * from userauth where username=?";

	sqlConnection.execute<ILoginData[]>(
		checkUserQuery,
		[req.body.username],
		(err, data) => {
			if (err) {
				return res.status(401).json("Error while logging in.");
			} else {
				if (Array.isArray(data)) {
					// User found
					if (data.length > 0) {
						// Check if user password matches the stored password
						let isPasswordOK = BCrypt.compareSync(
							req.body.password,
							data[0].password
						);
						if (isPasswordOK) {
							return res.status(200).json("Password correct.");
						} else {
							return res.status(200).json("Password or username invalid.");
						}
					}
				}
			}
		}
	);
};

export const logoutActionController = (
	req: Express.Request,
	res: Express.Response
) => {
	return res.status(200).json("Everything is OK. Logout");
};

/* This is the register action. It does the following :
  1) Handles the register request by accepting the parameters :
    a) username
    b) password
    c) email
    d) name
  2) Stores the password in the mySQL DB as a hash

*/

type TRegisterData = {
	name: string;
	email: string;
	username: string;
	password: string;
};

export const registerActionController = (
	req: Express.Request,
	res: Express.Response
) => {
	// Get the data fields from the "req".
	let registerData: TRegisterData = {
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
	};

	// Create the SQL connection
	const sqlConnection = SQL.createConnection({
		host: "127.0.0.1",
		port: 3307,
		user: "jwt",
		password: "1111",
		database: "data",
	});

	// Hash the password
	let hashSalt = BCrypt.genSaltSync(10);
	let hashedPassword = BCrypt.hashSync(registerData.password, hashSalt);

	// Check for previous entries of the same username
	const previousUsernames = "SELECT * from userauth where username=?";

	sqlConnection.execute(previousUsernames, [req.body.username], (err, data) => {
		if (err) {
			return res.status(401).json(err);
		} else {
			// Check if data received which means that the user exists
			if (Array.isArray(data)) {
				if (data.length > 0)
					return res.status(200).json("User already exists. Please login.");
				else {
					// User does not exist. Create a new entry in the table
					const entryQuery = `INSERT INTO userauth(name,username,password,email) VALUES("${registerData.name}","${registerData.username}","${hashedPassword}","${registerData.email}")`;
					sqlConnection.execute(entryQuery, (err, data) => {
						if (err) {
							return res.status(401).json(err);
						} else {
							return res
								.status(200)
								.json(
									`New user with username '${registerData.username}' has been registered.`
								);
						}
					});
				}
			} else {
				return res.status(401).json("No user data found");
			}
		}
	});
};
