import express from "express";
import { translateController } from "../controllers/translateController";
import { translationValidation } from "../middlewares/validator";
const router = express.Router();

/**
 * @openapi
 * /translate:
 *   post:
 *     description: Api Endpoint to accept english sentence to translate it to french!
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    text:
 *                      type: string
 *                      example: hello how are you?
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      translation:
 *                          type: string
 *         description: Returns a frech translation of given english sentence.
 *       400:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          success:
 *                              type: boolean
 *                              default: false
 *                          message:
 *                              type: string
 *                          field:
 *                              type: string
 */
router.post("/translate", translationValidation(), translateController);

export default router;
