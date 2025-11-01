import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage, CEFRLevel } from '../../types';
import { getAIAssistantResponse } from "../services/geminiService";
import { BotIcon, HelpCircleIcon, SendIcon, XIcon } from './icons';

interface AIAssistantProps {
  userLevel: CEFRLevel;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ userLevel, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'initial-ai', text: `Hello! I'm your AI assistant. Ask me anything about German grammar, vocabulary, or culture.`, sender: 'ai' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatHistoryRef = useRef<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const newUserMessage: ChatMessage = { id: `user-${Date.now()}`, text: messageText, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setUserInput('');

    chatHistoryRef.current.push({ role: 'user', parts: [{ text: messageText }] });
    
    try {
      const aiText = await getAIAssistantResponse(chatHistoryRef.current, messageText, userLevel);
      
      const newAiMessage: ChatMessage = { id: `ai-${Date.now()}`, text: aiText, sender: 'ai' };
      setMessages(prev => [...prev, newAiMessage]);
      chatHistoryRef.current.push({ role: 'model', parts: [{ text: aiText }] });
    } catch (error) {
       const errorMessage: ChatMessage = { id: `err-${Date.now()}`, text: 'Sorry, I encountered an error. Please try again.', sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, userLevel]);

  return (
    <div className="bg-base-100 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col h-[85vh] max-h-[700px] w-full sm:max-w-md sm:mr-6 sm:mb-6 animate-slide-in-up">
      <div className="p-4 border-b border-base-300 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <HelpCircleIcon className="h-7 w-7 text-primary" />
            <h3 className="text-xl font-bold text-text-primary">AI Assistant</h3>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-base-200 transition-colors">
          <XIcon className="h-6 w-6 text-text-secondary" />
        </button>
      </div>
      
      <div ref={chatContainerRef} className="flex-grow p-4 space-y-4 overflow-y-auto bg-base-200/50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'ai' && (
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                <BotIcon className="h-5 w-5" />
              </div>
            )}
            <div className={`max-w-xs md:max-w-sm p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-base-300 text-text-primary rounded-bl-none'}`}>
              <p className="text-sm">{msg.text}</p>
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

      <div className="p-4 border-t border-base-300 bg-base-100">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }} className="flex items-center gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-grow px-4 py-2 bg-base-200 border border-base-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !userInput.trim()} className="p-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
            <SendIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
      {/* FIX: Removed the invalid 'jsx' prop which is not a standard attribute for a <style> tag in React. */}
      <style>{`
        @keyframes slide-in-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.3s ease-out forwards;
        }
        @media (max-width: 640px) {
            .animate-slide-in-up {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
      `}</style>
    </div>
  );
};

export default AIAssistant;
