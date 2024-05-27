import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import readline from 'readline';

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const getGroqChatCompletion = async (message) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'llama3-8b-8192',
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
      stop: null,
      stream: false,
    });
    return response.choices[0]?.message?.content || 'No response from AI.';
  } catch (error) {
    console.error('Error fetching chat completion:', error);
    return 'An error occurred while fetching the response.';
  }
};

const main = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Ask a question (or type 'exit' to quit):");

  rl.on('line', async (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
    } else {
      const response = await getGroqChatCompletion(input);
      console.log(response);
      console.log("\nAsk another question (or type 'exit' to quit):");
    }
  });
};

main();
