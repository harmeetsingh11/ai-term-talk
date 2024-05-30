# AI-Term-Talk (A Terminal-based AI Chatbot) 🤖


## Overview

Welcome to the **AI-Term-Talk**, your command-line (CLI)/terminal based companion powered by advanced AI! This interactive chatbot leverages the cutting-edge `GroqCloud` API and the `LLaMA3` AI model to provide accurate, context-aware answers to your questions, all from the comfort of your terminal. Whether you're looking for quick information, tech assistance, or just a fun conversation, our AI chatbot is ready to chat!

## Features

- **Interactive Command-Line Interface**: Engage in conversations directly in your terminal.
- **Advanced AI Responses**: Uses GroqCloud's LLaMA3 AI model for nuanced and contextually accurate replies.
- **Seamless Integration**: Quick setup with Node.js and easy-to-install dependencies.
- **Environment Variable Management**: Securely manage API keys and configuration with dotenv.
- **Continuous Conversation**: Keeps the conversation going until you decide to exit.

## Screenshots/Demo



https://github.com/harmeetsingh11/ai-term-talk/assets/130365071/51497426-2d37-486c-ab11-5d48e080f1b5

![ss](https://github.com/harmeetsingh11/ai-term-talk/assets/130365071/f4a0789e-49b4-4e0b-bf5e-15fd2ec0b187)


## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## Dependencies

- [groq-sdk](https://www.npmjs.com/package/groq-sdk): To interact with GroqCloud API.
- [dotenv](https://www.npmjs.com/package/dotenv): To manage environment variables.
- [chalk](https://www.npmjs.com/package/chalk): For colorful text in the terminal.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/terminal-ai-chatbot.git
    cd terminal-ai-chatbot
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Groq API key:
    ```plaintext
    GROQ_API_KEY= <input your_groq_api_key_here>
    ```

## Usage

1. Run the chatbot:
    ```sh
    npm run chatbot
    ```

2. Interact with the chatbot by typing your questions in the terminal. To exit, simply close the terminal or stop the process.

## Example

Here's a simple example of how to use the chatbot:

```sh
$ npm run chatbot
WELCOME TO AI-TERM-TALK (CLI AI CHATBOT)!
Ask your question (or type 'exit' to quit): what is machine learning? (explain in one line)
Thinking...
Machine learning is a subfield of artificial intelligence that enables computers to learn from data without being explicitly programmed, allowing them to recognize patterns, make predictions, and improve their performance over time.    

Ask another question (or type 'exit' to quit): exit

GOODBYE!
