import { Request, Response, NextFunction } from "express";
import { signJWT, verifyJWT } from "../utils/jwt_utils";
import { getSession } from "../db/db";

function getUser(req: Request, res: Response, next: NextFunction) {
  let { accessToken, refreshToken } = req.cookies;
  if (!accessToken) {
    return next();
  }

  let { payload, expired } = verifyJWT(accessToken);

  // Valid access token
  if (payload) {
    // @ts-ignore
    req.user = payload;
    // @ts-ignore
    return next();
  }

  // Valid but expired access token
  const { payload: refresh } = expired && refreshToken ? verifyJWT(refreshToken) : { payload: null };
  if (!refresh) {
    return next();
  }

  // @ts-ignore
  const session = getSession(refresh.sessionID);

  if (!session) {
    return next();
  }
  const newAccessToken = signJWT(session, "5s");
  res.cookie("accessToken", newAccessToken, { httpOnly: true, maxAge: 5 * 1000 });

  //@ts-ignore
  req.user = verifyJWT(newAccessToken).payload;
  // @ts-ignore
  return next();
}
export { getUser };
