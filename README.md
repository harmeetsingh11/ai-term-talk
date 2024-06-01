9# AI-Term-Talk (A Terminal-based AI Chatbot) 🤖


## Overview

Welcome to the **AI-Term-Talk**, your command-line (CLI)/terminal-based companion powered by advanced AI! This interactive chatbot leverages the cutting-edge `GroqCloud` API and the `LLaMA3` AI model to provide accurate, context-aware answers to your questions, all from the comfort of your terminal. Whether you're looking for quick information, tech assistance, or just a fun conversation, our AI chatbot is ready to chat!

## Project Context

This project is the first task of the **Tublian AI Internship**. Through this challenge, I got to learn how to build applications on top of `Large Language Models`. Specifically, gain hands-on experience using cloud-based AI services and `LLaMa3`, the most popular `open-source LLM`.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Dependencies](#dependencies) 
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## Features

- **Interactive Command-Line Interface**: Engage in conversations directly in your terminal.
- **Advanced AI Responses**: Uses GroqCloud's LLaMA3 AI model for nuanced and contextually accurate replies.
- **Seamless Integration**: Quick setup with Node.js and easy-to-install dependencies.
- **Environment Variable Management**: Securely manage API keys and configuration with dotenv.
- **Continuous Conversation**: Keeps the conversation going until you decide to exit.

## Screenshots

![ss](https://github.com/harmeetsingh11/ai-term-talk/assets/130365071/f4a0789e-49b4-4e0b-bf5e-15fd2ec0b187)

## Demo Video

https://github.com/harmeetsingh11/ai-term-talk/assets/130365071/51497426-2d37-486c-ab11-5d48e080f1b5

## Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) - Make sure to install a version that is compatible with the project.
- [npm](https://www.npmjs.com/) - Node.js package manager.
- [Git](https://git-scm.com/) - Version control system.
- [GroqCloud API Key](https://console.groq.com/) - Get your GroqCloud API Key.

## Dependencies

- **[groq-sdk](https://www.npmjs.com/package/groq-sdk)**: version `0.4.0`
  - Description: To interact with GroqCloud API.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: version `16.4.5`
  - Description: Loads environment variables from a .env file into process.env.
- **[chalk](https://www.npmjs.com/package/chalk)**: version `5.3.0`
  - Description:  For colorful prompts in the terminal.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/harmeetsingh11/ai-term-talk.git
    cd ai-term-talk
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Groq API key (You can get you Groq API key from [here](https://console.groq.com/):
    ```plaintext
    GROQ_API_KEY= <input your_groq_api_key_here>
    ```

## Usage

1. Run the chatbot:
    ```sh
    npm run chatbot
    ```

2. Interact with the chatbot by typing your questions in the terminal. To exit, simply type `exit` in the terminal.

## Example

Here's a simple example of how to use the chatbot:

```bash
$ npm run chatbot
WELCOME TO AI-TERM-TALK (CLI AI CHATBOT)!
Ask your question (or type 'exit' to quit): what is machine learning? (explain in one line)
Thinking...
Machine learning is a subfield of artificial intelligence that enables computers to learn from data without being explicitly programmed, allowing them to recognize patterns, make predictions, and improve their performance over time.    

Ask another question (or type 'exit' to quit): exit

GOODBYE!
