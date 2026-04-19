import { getCamper } from '@/lib/api/api';
import { GetCamperResponse } from '@/lib/types/apiTypes';
import { useQuery } from '@tanstack/react-query';

export const useCamper = (camperId: string) => {
  return useQuery<GetCamperResponse>({
    queryKey: ['camper', camperId],
    queryFn: () => getCamper(camperId),
  });
};
