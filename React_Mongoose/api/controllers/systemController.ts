import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const serverTestController = (req: Request, res: Response) => {
  return res.status(200).json({ response: "Server OK" });
};

const getCodeController = (req: Request, res: Response) => {
  return res.status(200).json({ code: uuidv4() });
};

export { serverTestController, getCodeController };
