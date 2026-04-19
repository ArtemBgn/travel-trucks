import { getAllCampers } from '@/lib/api/api';
import { GetAllCampersResponse } from '@/lib/types/apiTypes';
import { useQuery } from '@tanstack/react-query';

export const useAllCampers = () => {
  return useQuery<GetAllCampersResponse>({
    queryKey: ['allCampers'],
    queryFn: () => getAllCampers(),
  });
};
