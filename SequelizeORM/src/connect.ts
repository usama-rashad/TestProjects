const { Sequelize, DataTypes } = require("sequelize");

let sequelize: any;

const connect = async () => {
  sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/postgres");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const createTable = async (): Promise<number> => {
  if (sequelize == null) {
    console.log("No DB connection. Table creation failed.");
    return 0;
  } else {
    let usersTable = sequelize.define();
    return 1;
  }
};

export { connect, sequelize };
