import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { config } from "../config/config";

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  maxOutputTokens: 2048,
  apiKey: config.LLM_API_KEY,
  temperature: 0.4,
});

export const translateToFrench = async (text: string) => {
  try {
    const response = await model.invoke([
      [
        "system",
        `
                  You are a world class English to French Translator. 
                  given a user query translate that into french. you do not have to reply other than 
                  the context of translation. Always only output the translated french text nothing extra.
                  try your best to translate given english sentence to french and avoid translating single character if given but if you can not translate it do not hallucinate simply
                  output given text can not be translated!  
                  `,
      ],
      ["user", `${text}`],
    ]);
    return response.content.toString().trim();
  } catch (error) {
    throw error;
  }
};
