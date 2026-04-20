import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getCamper, getCamperReviews } from '@/lib/api/api';
import CamperPageIdClient from './CamperPageId.client';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ camperId: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { camperId } = await params;
  const queryClient = new QueryClient();
  const camper = await queryClient.fetchQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamper(camperId),
  });

  if (!camper) {
    return {
      title: 'Camper Not Found | TravelTrucks',
    };
  }
  return {
    title: `${camper} | TravelTrucks Rental`,
    description: `Rent ${camper.name}. ${camper.description.slice(0, 150)}... Book this fully equipped campervan for your next road trip.`,
    openGraph: {
      title: `Rent ${camper.name} - Modern Campervan`,
      description: `Check out reviews and features of ${camper.name}. Your perfect adventure starts here.`,
      images: [
        {
          url: camper.gallery[0]?.original || '/default-camper-og.jpg',
          width: 1200,
          height: 630,
          alt: camper.name,
        },
      ],
    },
  };
}

/*
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
*/

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
