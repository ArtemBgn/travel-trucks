import css from './CatalogPage.module.css';
import CatalogClient from './Catalog.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getAllCampers, getFilters } from '@/lib/api/api';

async function CatalogPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['allCampers', 'infinite', {}],
    queryFn: () => getAllCampers({}),
    initialPageParam: 1,
  });
  await queryClient.prefetchQuery({
    queryKey: ['filters'],
    queryFn: getFilters,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}

export default CatalogPage;
