import jwt from "jsonwebtoken";
import { privateKey, publicKey } from "../controllers/keys";

function signJWT(payload: object, expiryTime: number | string): string {
  return jwt.sign(payload, privateKey, { algorithm: "HS256", expiresIn: expiryTime });
}

function verifyJWT(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);
    return { payload: decoded, expired: false };
  } catch (e) {
    return { payload: null, expired: "JWT expired" };
  }
}

export { signJWT, verifyJWT };
