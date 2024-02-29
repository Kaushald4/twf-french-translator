import { body } from "express-validator";
export const translationValidation = () =>
  body("text")
    .isString()
    .withMessage("Translation text must be a valid string")
    .trim()
    .notEmpty()
    .withMessage("Please Provide the validation text to translate!");
