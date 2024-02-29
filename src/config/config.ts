import swaggerJsdoc from "swagger-jsdoc";
export const config = {
  LLM_API_KEY: process.env.LLM_API_KEY,
};

export const setupSwagger = () => {
  const options = {
    definition: {
      openapi: "3.0.0",
      servers: [{ url: "/api/v1" }],
      info: {
        title:
          "English to french translation API using google's Gemini Large Language Model.",
        version: "1.0.0",
      },
    },
    apis: ["./src/routes/*.ts"], // files containing annotations as above
  };

  const openapiSpecification = swaggerJsdoc(options);
  return openapiSpecification;
};
