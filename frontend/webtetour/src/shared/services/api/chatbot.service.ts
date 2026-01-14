import { axiosClient } from './axios';

export interface ChatMessage {
  id?: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export interface ChatRequest {
  message: string;
  conversationId?: string;
}

export interface ChatResponse {
  message: string;
  conversationId: string;
  suggestions?: string[];
}

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

export class ChatbotService {
  /**
   * Send message to chatbot
   * POST /api/chatbot/message
   */
  static async sendMessage(data: ChatRequest): Promise<ChatResponse> {
    try {
      const response = await axiosClient.post<ChatResponse>('/chatbot/message', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get conversation history
   * GET /api/chatbot/conversations
   */
  static async getConversations(): Promise<Conversation[]> {
    try {
      const response = await axiosClient.get<Conversation[]>('/chatbot/conversations');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get conversation by ID
   * GET /api/chatbot/conversations/:id
   */
  static async getConversationById(id: string): Promise<Conversation> {
    try {
      const response = await axiosClient.get<Conversation>(`/chatbot/conversations/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete conversation
   * DELETE /api/chatbot/conversations/:id
   */
  static async deleteConversation(id: string): Promise<{ message: string }> {
    try {
      const response = await axiosClient.delete(`/chatbot/conversations/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Generate itinerary
   * POST /api/chatbot/generate-itinerary
   */
  static async generateItinerary(preferences: {
    destination?: string;
    duration?: number;
    budget?: number;
    interests?: string[];
  }): Promise<{
    itinerary: string;
    recommendations: string[];
  }> {
    try {
      const response = await axiosClient.post('/chatbot/generate-itinerary', preferences);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
