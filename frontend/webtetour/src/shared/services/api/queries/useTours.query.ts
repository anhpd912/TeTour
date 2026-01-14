import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { TourService, Tour, TourListResponse, TourFilters } from '../tour.service';
import { AxiosError } from 'axios';

export const useToursQuery = (filters?: TourFilters, options?: UseQueryOptions<TourListResponse, AxiosError>) => {
  return useQuery<TourListResponse, AxiosError>({
    queryKey: ['tours', filters],
    queryFn: () => TourService.getTours(filters),
    ...options,
  });
};

export const useTourByIdQuery = (id: number, options?: UseQueryOptions<Tour, AxiosError>) => {
  return useQuery<Tour, AxiosError>({
    queryKey: ['tour', id],
    queryFn: () => TourService.getTourById(id),
    enabled: !!id,
    ...options,
  });
};

export const useTrendingToursQuery = (limit: number = 6, options?: UseQueryOptions<Tour[], AxiosError>) => {
  return useQuery<Tour[], AxiosError>({
    queryKey: ['tours', 'trending', limit],
    queryFn: () => TourService.getTrendingTours(limit),
    ...options,
  });
};
