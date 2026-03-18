import express from 'express';
import { Message } from '../controllers/chatbot.message.js';

const chatbotrouter = express.Router();

chatbotrouter.post("/message", Message)

export default chatbotrouter;