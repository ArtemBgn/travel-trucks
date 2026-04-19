import { getCamperReviews } from '@/lib/api/api';
import { GetCamperReviewsResponse } from '@/lib/types/apiTypes';
import { useQuery } from '@tanstack/react-query';

export const useCamperReviews = (camperId: string) => {
  return useQuery<GetCamperReviewsResponse>({
    queryKey: ['camperReviews', camperId],
    queryFn: () => getCamperReviews(camperId),
  });
};
