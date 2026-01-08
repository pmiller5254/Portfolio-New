
import { GoogleGenAI } from "@google/genai";
import { BIO, PROJECTS, EXPERIENCES, SKILLS, EDUCATION } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AI assistant for ${BIO.name}'s professional portfolio.
Your goal is to answer questions about ${BIO.name} using the following information:

Name: ${BIO.name}
Title: ${BIO.title}
Contact: ${BIO.email} | ${BIO.phone} | ${BIO.linkedin}
Summary: ${BIO.summary}
Skills: ${SKILLS.map(s => `${s.name} (${s.level}%)`).join(', ')}
Cloud Certifications: AWS Certified Solutions Architect, Cloud Practitioner, AI Practitioner.
Key Projects: ${PROJECTS.map(p => p.title + ": " + p.description).join('; ')}
Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
Education: ${EDUCATION.map(ed => `${ed.degree} from ${ed.institution} (${ed.date})`).join('; ')}

Be professional, concise, and helpful. You represent a high-achieving engineer who has worked at major tech companies like Google and Bloomberg. Focus on his expertise in curriculum design, JavaScript, and cloud infrastructure. If asked something not in the data, politely say you only have information regarding Prince's professional background.
`;

export class GeminiAssistant {
  async chat(message: string, history: { role: string; text: string }[]) {
    try {
      /**
       * Initialize GoogleGenAI right before the API call to ensure it uses the most up-to-date API key.
       * Always use the apiKey from process.env.API_KEY directly.
       */
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: history.length > 0 
          ? [
              ...history.map(h => ({ 
                role: h.role === 'assistant' ? 'model' : 'user', 
                parts: [{ text: h.text }] 
              })), 
              { role: 'user', parts: [{ text: message }] }
            ]
          : message,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      // Directly access .text property from GenerateContentResponse
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having trouble connecting right now. Please try again later.";
    }
  }
}

export const assistant = new GeminiAssistant();
