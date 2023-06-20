interface IUser {
  username: string;
  password: string;
}

const userDB: IUser[] = [{ username: "usamakr", password: "123" }];

let userSessions: Record<string, { name: string; valid: boolean }>[] = [];

function findUser(user: IUser): IUser | undefined {
  return userDB.find((value) => value.username === user.username && value.password === user.password);
}

function createSession(user: IUser) {}

export { findUser };
