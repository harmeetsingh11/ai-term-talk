import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import readline from 'readline';
import chalk from 'chalk';

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

const typeEffect = (text, chunkSize = 2, delay = 50) => {
  // Displays text in chunks (words or phrases) with a delay between each chunk
  return new Promise((resolve) => {
    let i = 0;
    const words = text.split(' ');
    const interval = setInterval(() => {
      const chunk = words.slice(i, i + chunkSize).join(' ') + ' ';
      process.stdout.write(chunk);
      i += chunkSize;
      if (i >= words.length) {
        clearInterval(interval);
        resolve();
      }
    }, delay);
  });
};

const main = async () => {
  console.log(
    chalk.bgGreen.bold(' WELCOME TO AI-TERM-TALK (CLI AI CHATBOT)! ')
  );

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.cyan.bold("Ask your question (or type 'exit' to quit): "),
  });

  rl.prompt();

  rl.on('line', async (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
    } else {
      console.log(chalk.green.bold('Thinking...'));
      const response = await getGroqChatCompletion(input);
      await typeEffect(response);
      console.log('\n');
      rl.setPrompt(
        chalk.blue.bold("Ask another question (or type 'exit' to quit): ")
      );
      rl.prompt();
    }
  });

  rl.on('close', () => {
    console.log(chalk.yellow.bold('\nGOODBYE!'));
  });
};

main();
