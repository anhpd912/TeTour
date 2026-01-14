import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ChatbotService, ChatRequest, ChatResponse } from '../chatbot.service';
import { AxiosError } from 'axios';

export const useSendMessageMutation = (options?: UseMutationOptions<ChatResponse, AxiosError, ChatRequest>) => {
  return useMutation<ChatResponse, AxiosError, ChatRequest>({
    mutationFn: (data: ChatRequest) => ChatbotService.sendMessage(data),
    ...options,
  });
};

export const useGenerateItineraryMutation = (
  options?: UseMutationOptions<
    { itinerary: string; recommendations: string[] },
    AxiosError,
    {
      destination?: string;
      duration?: number;
      budget?: number;
      interests?: string[];
    }
  >,
) => {
  return useMutation({
    mutationFn: (preferences) => ChatbotService.generateItinerary(preferences),
    ...options,
  });
};
