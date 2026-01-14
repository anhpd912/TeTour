import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { TourService, BookingRequest, BookingResponse } from '../tour.service';
import { AxiosError } from 'axios';

export const useBookTourMutation = (options?: UseMutationOptions<BookingResponse, AxiosError, BookingRequest>) => {
  return useMutation<BookingResponse, AxiosError, BookingRequest>({
    mutationFn: (data: BookingRequest) => TourService.bookTour(data),
    ...options,
  });
};

export const useCancelBookingMutation = (options?: UseMutationOptions<{ message: string }, AxiosError, string>) => {
  return useMutation<{ message: string }, AxiosError, string>({
    mutationFn: (bookingId: string) => TourService.cancelBooking(bookingId),
    ...options,
  });
};
