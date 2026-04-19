'use client';
import GaleryCamper from '@/components/CamperPage/GaleryCamper/GaleryCamper';
import InfoCamper from '@/components/CamperPage/InfoCamper/InfoCamper';
import ReviewsBlock from '@/components/CamperPage/ReviewsBlock/ReviewsBlock';
import BookingForm from '@/components/CamperPage/BookingForm/BookingForm';
import {
  CamperReview,
  GalleryItem,
  GetCamperResponse,
} from '@/lib/types/apiTypes';
import { getCamper, getCamperReviews, postCamperBooking } from '@/lib/api/api';

import css from './CamperPageId.module.css';
import { useCamper } from '@/hooks/useCamper';
import { useCamperReviews } from '@/hooks/useCamperReviews';

interface CamperPageIdClientProps {
  camperId: string;
}

function CamperPageIdClient({ camperId }: CamperPageIdClientProps) {
  const { data: camper, isLoading } = useCamper(camperId);
  const { data: reviews } = useCamperReviews(camperId);
  if (isLoading || !camper || !reviews) return <div>Loading...</div>;

  // const dataHook = useCamperReviews(camperId);
  // dataHook.data.

  return (
    <div className={css['parent-camper-page']}>
      <div className={css['location-gallery-infoblock']}>
        <div className={css['for-element']}>
          <GaleryCamper campersImgItem={camper.gallery} />
        </div>
        <div className={css['for-element']}>
          <InfoCamper camper={camper} />
        </div>
      </div>
      <div className={css['location-gallery-infoblock']}>
        <div className={css['for-element']}>
          <ReviewsBlock reviews={reviews || []} />
        </div>
        <div className={css['for-element']}>
          <BookingForm camperId={camperId} />
        </div>
      </div>
    </div>
  ); /**/
}

export default CamperPageIdClient;
