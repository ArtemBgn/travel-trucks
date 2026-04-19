import { getFilters } from '@/lib/api/api';
import { GetFiltersResponse } from '@/lib/types/apiTypes';
import { useQuery } from '@tanstack/react-query';

export const useFilters = () => {
  return useQuery<GetFiltersResponse>({
    queryKey: ['filters'],
    queryFn: getFilters,
  });
};
