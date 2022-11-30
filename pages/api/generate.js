import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = ` to the Greatest Minds in History. They all agreed upon a specially crafted and detailed explanations with various examples and even understandable by five year old kids:`;
const generateAction = async (req, res) => {
  // Run first prompt

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `I asked "${req.body.userInput}"${basePromptPrefix}`,
    temperature: 0.85,
    max_tokens: 650
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
