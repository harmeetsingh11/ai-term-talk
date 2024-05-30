# AI-Term-Talk (A Terminal-based AI Chatbot) 🤖


## Overview

Welcome to the **AI-Term-Talk**, your command-line (CLI)/terminal based companion powered by advanced AI! This interactive chatbot leverages the cutting-edge `GroqCloud` API and the `LLaMA3` AI model to provide accurate, context-aware answers to your questions, all from the comfort of your terminal. Whether you're looking for quick information, tech assistance, or just a fun conversation, our AI chatbot is ready to chat!

## Features

- **Interactive Command-Line Interface**: Engage in conversations directly in your terminal.
- **Advanced AI Responses**: Uses GroqCloud's LLaMA3 AI model for nuanced and contextually accurate replies.
- **Seamless Integration**: Quick setup with Node.js and easy-to-install dependencies.
- **Environment Variable Management**: Securely manage API keys and configuration with dotenv.
- **Continuous Conversation**: Keeps the conversation going until you decide to exit.

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
Welcome to the Terminal AI Chatbot!
Ask me anything: What is the capital of France?
Chatbot: The capital of France is Paris.
Ask me anything: Who wrote 'To Kill a Mockingbird'?
Chatbot: 'To Kill a Mockingbird' was written by Harper Lee.
