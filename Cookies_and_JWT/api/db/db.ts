type TUser = {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
};

let users: TUser[] = [
  {
    name: "usama",
    password: "123",
    email: "usamakr@gmail.com",
    isAdmin: true,
  },
  {
    name: "ayesha",
    password: "111",
    email: "ayesha@gmail.com",
  },
];

export const sessions: Record<string, { sessionId: string; email: string; valid: boolean }> = {};

function addUser(user: TUser) {
  users.push(user);
}

function findUser(user: TUser): TUser | undefined {
  return users.find((value) => value.name === user.name && value.password === user.password);
}

function confirmUser(user: TUser): boolean {
  return users.find((value) => value.name === user.name)?.password === user.password;
}

function createSession(email: string, name: string) {
  const sessionId = String(Object.keys(users).length + 1);
  const session = { sessionId, email, valid: true, name };
  sessions[sessionId] = session;
  return session;
}

function endSession(sessionID: string) {
  sessions[sessionID] = { ...sessions[sessionID], valid: false };
  return sessions;
}

function getSession(sessionID: string) {
  return sessions[sessionID];
}

export { addUser, findUser, confirmUser, createSession, endSession, getSession };
