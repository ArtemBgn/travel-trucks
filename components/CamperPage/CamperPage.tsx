import {
  CamperReview,
  GalleryItem,
  GetCamperResponse,
} from '@/lib/types/apiTypes';
import css from './CamperPage.module.css';
import GaleryCamper from './GaleryCamper/GaleryCamper';
import InfoCamper from './InfoCamper/InfoCamper';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';
import BookingForm from './BookingForm/BookingForm';

interface CamperPageProps {
  campersImgItem: GalleryItem[];
  camper: GetCamperResponse;
  reviews: CamperReview[];
}

function CamperPage({ campersImgItem, camper, reviews }: CamperPageProps) {
  return (
    <div>
      <GaleryCamper campersImgItem={campersImgItem} />
      <InfoCamper camper={camper} />
      <ReviewsBlock reviews={reviews} />
      <BookingForm camperId={camper.id} />
    </div>
  );
}

export default CamperPage;
