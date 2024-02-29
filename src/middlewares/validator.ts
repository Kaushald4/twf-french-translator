import { body } from "express-validator";
export const translationValidation = () =>
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Please Provide the validation text to translate!");
