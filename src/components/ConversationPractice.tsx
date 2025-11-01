
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage, CEFRLevel } from '../../types';
import getAIResponse from '../services/geminiService';
import { ArrowLeftIcon, BotIcon, MicIcon, SendIcon } from './icons';

interface ConversationPracticeProps {
  topic: string;
  level: CEFRLevel;
  onEnd: () => void;
}

const ConversationPractice: React.FC<ConversationPracticeProps> = ({ topic, level, onEnd }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const chatHistoryRef = useRef<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: messageText,
      sender: 'user',
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setUserInput('');

    // Update chat history for Gemini
    chatHistoryRef.current.push({ role: 'user', parts: [{ text: messageText }] });
    
    try {
      const aiText = await getAIResponse(chatHistoryRef.current, messageText, level, topic);
      
      const newAiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        text: aiText,
        sender: 'ai',
      };

      setMessages(prev => [...prev, newAiMessage]);
      chatHistoryRef.current.push({ role: 'model', parts: [{ text: aiText }] });
    } catch (error) {
       const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'ai',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, level, topic]);

  const handleMicClick = () => {
    // This is a placeholder for actual Web Speech API integration.
    setIsListening(prev => !prev);
    if (!isListening) {
        // Simulate speech recognition
        setUserInput("Hallo! Wie geht es Ihnen?");
        setTimeout(() => {
            handleSendMessage("Hallo! Wie geht es Ihnen?");
            setIsListening(false);
        }, 1500);
    }
  };

  return (
    <div className="bg-base-100 rounded-xl shadow-lg flex flex-col h-[80vh] max-h-[700px]">
      <div className="p-4 border-b border-base-300 flex items-center gap-4">
        <button onClick={onEnd} className="p-2 rounded-full hover:bg-base-200 transition-colors">
          <ArrowLeftIcon className="h-6 w-6 text-text-secondary" />
        </button>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Conversation Practice</h3>
          <p className="text-sm text-text-secondary">Topic: {topic} (Level {level})</p>
        </div>
      </div>
      
      <div ref={chatContainerRef} className="flex-grow p-4 space-y-4 overflow-y-auto bg-base-200/50">
        {messages.map((msg, index) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'ai' && (
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                <BotIcon className="h-5 w-5" />
              </div>
            )}
            <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-base-300 text-text-primary rounded-bl-none'}`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex items-end gap-2 justify-start">
                 <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <BotIcon className="h-5 w-5" />
                </div>
                <div className="max-w-xs p-3 rounded-2xl bg-base-300 text-text-primary rounded-bl-none">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-text-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-text-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-text-secondary rounded-full animate-bounce"></span>
                    </div>
                </div>
            </div>
        )}
      </div>

      <div className="p-4 border-t border-base-300">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }} className="flex items-center gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={isListening ? "Listening..." : "Type your message..."}
            className="flex-grow px-4 py-2 bg-base-200 border border-base-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading || isListening}
          />
          <button type="button" onClick={handleMicClick} disabled={isLoading} className={`p-3 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white' : 'bg-secondary hover:bg-secondary/80 text-white'}`}>
            <MicIcon className="h-5 w-5" />
          </button>
          <button type="submit" disabled={isLoading || !userInput.trim()} className="p-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
            <SendIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConversationPractice;
