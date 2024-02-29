import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../utils/catchAsyncError";
import { validationResult } from "express-validator";
import { translateToFrench } from "../translator";

export const translateController = catchAsyncError(
  async (req: Request, res: Response, _next: NextFunction) => {
    let errors: any = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
        field: errors.array()[0].path,
      });
    }

    const { text } = req.body;
    const data = await translateToFrench(text);
    res.status(200).json({ translation: data });
  }
);
