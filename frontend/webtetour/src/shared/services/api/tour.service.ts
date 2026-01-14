import { axiosClient } from './axios';

export interface Tour {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
}

export interface TourFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  duration?: string;
  location?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface TourListResponse {
  tours: Tour[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BookingRequest {
  tourId: number;
  startDate: string;
  numberOfPeople: number;
  specialRequests?: string;
}

export interface BookingResponse {
  id: string;
  tourId: number;
  userId: string;
  startDate: string;
  numberOfPeople: number;
  totalPrice: number;
  status: string;
  createdAt: string;
}

export class TourService {
  /**
   * Get list of tours with filters
   * GET /api/tours
   */
  static async getTours(filters?: TourFilters): Promise<TourListResponse> {
    try {
      const response = await axiosClient.get<TourListResponse>('/tours', {
        params: filters,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get tour by ID
   * GET /api/tours/:id
   */
  static async getTourById(id: number): Promise<Tour> {
    try {
      const response = await axiosClient.get<Tour>(`/tours/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get trending tours
   * GET /api/tours/trending
   */
  static async getTrendingTours(limit: number = 6): Promise<Tour[]> {
    try {
      const response = await axiosClient.get<Tour[]>('/tours/trending', {
        params: { limit },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Book a tour
   * POST /api/bookings
   */
  static async bookTour(data: BookingRequest): Promise<BookingResponse> {
    try {
      const response = await axiosClient.post<BookingResponse>('/bookings', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user bookings
   * GET /api/bookings
   */
  static async getUserBookings(): Promise<BookingResponse[]> {
    try {
      const response = await axiosClient.get<BookingResponse[]>('/bookings');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Cancel booking
   * DELETE /api/bookings/:id
   */
  static async cancelBooking(bookingId: string): Promise<{ message: string }> {
    try {
      const response = await axiosClient.delete(`/bookings/${bookingId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
