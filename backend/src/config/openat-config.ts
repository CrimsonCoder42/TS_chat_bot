import { Configuration } from "openai"

function configureOpenAI() {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
})