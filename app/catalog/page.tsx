import CatalogClient from './Catalog.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getAllCampers, getFilters } from '@/lib/api/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campervan Rental Catalog | TravelTrucks',
  description:
    'Explore our premium collection of campervans and RVs. Compare models, check features, and find the perfect vehicle for your next adventure. Best rental prices starts here.',
  keywords: [
    'campervan rental',
    'RV catalog',
    'motorhome hire',
    'TravelTrucks fleet',
    'road trip rentals',
  ],
  openGraph: {
    title: 'Choose Your Dream Camper | TravelTrucks Fleet',
    description:
      'Find the best camper for your journey. Wide selection of fully equipped RVs for any taste.',
    url: `${process.env.NEXT_PUBLIC_my_URL}`,
    siteName: 'TravelTrucks',
    images: [
      {
        url: '/travel-trucks-camper-rental.jpg',
        width: 1200,
        height: 630,
        alt: 'Wide selection of TravelTrucks campervans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
