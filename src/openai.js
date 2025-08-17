import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;

// const response = openai.responses.create({
//   model: "gpt-4o-mini",
//   input: "write a haiku about ai",
//   store: true,
// });

// response.then((result) => console.log(result.output_text));
