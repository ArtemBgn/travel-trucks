import css from './CamperPageId.module.css';

/*********/
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getCamper, getCamperReviews, postCamperBooking } from '@/lib/api/api';
import CamperPageIdClient from './CamperPageId.client';

interface PageProps {
  params: Promise<{ camperId: string }>;
}

async function CamperPageId({ params }: PageProps) {
  const camperId = (await params).camperId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamper(camperId),
  });

  await queryClient.prefetchQuery({
    queryKey: ['camperReviews', camperId],
    queryFn: () => getCamperReviews(camperId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperPageIdClient camperId={camperId} />
    </HydrationBoundary>
  );
}

export default CamperPageId;
