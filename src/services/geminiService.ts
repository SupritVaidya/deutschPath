
import { GoogleGenAI, Modality } from "@google/genai";
import { CEFRLevel } from "../types";

const getAIResponse = async (
  messageHistory: { role: 'user' | 'model'; parts: { text: string }[] }[],
  userMessage: string,
  level: CEFRLevel,
  topic: string
): Promise<string> => {
  // This check is for the web environment where process.env is not directly available.
  // In a real build setup, API_KEY would be securely managed.
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set. Using a mock response.");
    // Return a mock response for development without an API key
    return new Promise(resolve => setTimeout(() => resolve(`Hallo! Das ist eine gute Frage. Als A1-Lerner ist es wichtig, einfache Sätze zu üben. Wie kann ich Ihnen heute helfen, Ihr Deutsch zu verbessern zum Thema "${topic}"?`), 1500));
  }
  
  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `You are a friendly, patient German language tutor named "DeutschBot".
    Your student is at the ${level} level of the Common European Framework of Reference for Languages (CEFR).
    You must adapt your language, vocabulary, and sentence structure strictly to this level.
    The current conversation topic is: "${topic}".
    Keep your responses concise and encouraging.
    If the user makes a mistake, gently correct it in your next response and provide a very brief explanation in simple English. For example: "Das ist gut! A small correction: we say 'Ich bin müde' not 'Ich bin müde bin'. Keep up the great work!".
    Do not overwhelm the user. Your goal is to build confidence.
    Engage in a natural, friendly conversation based on the topic.`;
  
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            ...messageHistory,
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topK: 40,
        },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Es tut mir leid, ich habe ein Problem. Bitte versuchen Sie es später noch einmal. (Sorry, I'm having a problem. Please try again later.)";
  }
};

export const getAIAssistantResponse = async (
  messageHistory: { role: 'user' | 'model'; parts: { text: string }[] }[],
  userMessage: string,
  level: CEFRLevel
): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set. Using mock response. Advanced features like thinking mode will not function.");
    return new Promise(resolve => setTimeout(() => resolve(`Hallo! I am your AI Assistant. How can I help you with German today? You can ask me about grammar, vocabulary, or anything else!`), 1000));
  }
  
  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `You are a helpful and knowledgeable AI assistant for a German language learner.
    The user's current CEFR level is ${level}.
    Your primary goal is to answer the user's questions about German grammar, vocabulary, sentences, or culture clearly and accurately.
    Tailor your explanations to the user's ${level}. Use simple language and provide clear examples.
    If a user asks for a translation, provide it. If they ask for a grammar explanation, explain it patiently.
    Keep your tone friendly, supportive, and educational.
    Answer in English unless the user asks you to respond in German.`;
  
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: [
            ...messageHistory,
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.5,
            thinkingConfig: {
                thinkingBudget: 32768,
            }
        },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API for assistant:", error);
    return "I'm sorry, I seem to be having trouble connecting. Please try again in a moment.";
  }
};

export const generateSpeech = async (text: string): Promise<string | null> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
        console.warn("API_KEY is not set for TTS. Speech generation is disabled.");
        return null;
    }

    try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' }, // A standard, clear German voice
                    },
                },
            },
        });
        
        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
            return base64Audio;
        }
        return null;
    } catch (error) {
        console.error("Error generating speech:", error);
        return null;
    }
};


export default getAIResponse;
