import { getAllCampers } from '@/lib/api/api';
import {
  GetAllCampersProps,
  GetAllCampersResponse,
} from '@/lib/types/apiTypes';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteCampers = (filters: GetAllCampersProps) => {
  return useInfiniteQuery<GetAllCampersResponse>({
    queryKey: ['allCampers', 'infinite', filters],
    queryFn: ({ pageParam = 1 }) =>
      getAllCampers({ page: pageParam as number, ...filters }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });
};
