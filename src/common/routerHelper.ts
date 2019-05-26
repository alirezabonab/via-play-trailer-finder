import { Request, Response, NextFunction, RequestHandler } from "express";


// to create higher order route 
// which handles error problem using async middleware with express

export const awaitHandlerFactory = (middleware: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
