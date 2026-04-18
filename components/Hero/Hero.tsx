'use client'; //нужно ли?
import css from './Hero.module.css';
import Button from '../Button/Button';
import {
  getAllCampers,
  getCamper,
  getCamperReviews,
  getFilters,
  postCamperBooking,
} from '@/lib/api/api';
import InfoCamper from '../CamperPage/InfoCamper/InfoCamper';
// import { GetCamperResponse } from '@/lib/types/apiTypes';
// import FilterForm from '../FilterForm/FilterForm';
// import BookingForm from '../CamperPage/BookingForm/BookingForm';
// import ReviewsBlock from '../CamperPage/ReviewsBlock/ReviewsBlock';
// import { CamperReview } from '@/lib/types/apiTypes';
// import Article from '../Article/Article';
// import { Camper } from '@/lib/types/apiTypes';

/*const tmpC: Camper = {
  id: 'cmniy1dvz000eyyoxgtlipyo4',
  name: 'Britz 4 Berth',
  price: 9000,
  rating: 4.4,
  location: 'Ukraine, Dnipro',
  description:
    "Experience luxury on the road with the Britz 4 Berth motorhome. Perfect for couples or small families, this alcove-style RV combines style, comfort, and functionality to provide an unforgettable travel experience. Whether you're exploring scenic landscapes or camping under the stars, the Britz 4 Berth offers a home-like atmosphere wherever your adventures take you.",
  form: 'alcove',
  length: '6.4m',
  width: '2.65m',
  height: '3.65m',
  tank: '208l',
  consumption: '30l/100km',
  transmission: 'manual',
  engine: 'petrol',
  amenities: [
    'ac',
    'bathroom',
    'kitchen',
    'tv',
    'radio',
    'refrigerator',
    'microwave',
    'water',
  ],
  createdAt: '2026-04-03T13:32:46.607Z',
  updatedAt: '2026-04-03T13:32:46.607Z',
  coverImage:
    'https://ac.goit.global/fullstack/career/campers/britz-4-berth/britz-4-berth-1.jpg',
  totalReviews: 2,
};/**/
/*const reviews: CamperReview[] = [
  {
    id: 'cmniy1dvm0005yyoxj0j73di3',
    camperId: 'cmniy1dvm0000yyoxsi4m4hns',
    reviewer_name: 'Alice',
    reviewer_rating: 5,
    comment:
      'Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!',
    createdAt: '2026-04-03T13:32:46.595Z',
  },
  {
    id: 'cmniy1dvm0006yyox12oldnuv',
    camperId: 'cmniy1dvm0000yyoxsi4m4hns',
    reviewer_name: 'Bob',
    reviewer_rating: 4,
    comment:
      'Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.',
    createdAt: '2026-04-03T13:32:46.595Z',
  },
];/**/
/*const camper: GetCamperResponse = {
  id: 'cmniy1dvm0000yyoxsi4m4hns',
  name: 'Road Bear C 23-25',
  price: 10000,
  rating: 4.5,
  location: 'Ukraine, Kyiv',
  description:
    'Embadventures, promising comfort, style, and the freedom to explore at your own pace.',
  form: 'alcove',
  length: '7.3m',
  width: '2.65m',
  height: '3.65m',
  tank: '208l',
  consumption: '30l/100km',
  transmission: 'automatic',
  engine: 'diesel',
  amenities: ['ac', 'bathroom', 'tv', 'radio', 'microwave', 'water'],
  createdAt: '2026-04-03T13:32:46.595Z',
  updatedAt: '2026-04-03T13:32:46.595Z',
  gallery: [
    {
      id: 'cmniy1dvm0001yyoxrt0eot8b',
      camperId: 'cmniy1dvm0000yyoxsi4m4hns',
      thumb:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-1.jpg',
      original:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-1.jpg',
      order: 1,
    },
    {
      id: 'cmniy1dvm0002yyoxg6qaw1hp',
      camperId: 'cmniy1dvm0000yyoxsi4m4hns',
      thumb:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-2.jpg',
      original:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-2.jpg',
      order: 2,
    },
    {
      id: 'cmniy1dvm0003yyoxpeo12stt',
      camperId: 'cmniy1dvm0000yyoxsi4m4hns',
      thumb:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-3.jpg',
      original:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-3.jpg',
      order: 3,
    },
    {
      id: 'cmniy1dvm0004yyoxeous6cfp',
      camperId: 'cmniy1dvm0000yyoxsi4m4hns',
      thumb:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-4.jpg',
      original:
        'https://ac.goit.global/fullstack/career/campers/road-bear-c-23-25/road-bear-c-23-25-4.jpg',
      order: 4,
    },
  ],
  totalReviews: 2,
};/**/

function Hero() {
  const handleClick = async () => {
    const resGetAllCampers = await getAllCampers();
    console.log('🚀resGetAllCampers:', resGetAllCampers);
    const resGetFilters = await getFilters();
    console.log('🚀resGetFilters:', resGetFilters);
    const resGetCamper = await getCamper('cmniy1dvu0007yyox23jbyl9k');
    console.log('🚀resGetCamper:', resGetCamper);
    const resGetCamperReviews = await getCamperReviews(
      'cmniy1dvu0007yyox23jbyl9k',
    );
    console.log('🚀resGetCamperReviews:', resGetCamperReviews);
    const resPostCamperBooking = await postCamperBooking({
      camperId: 'cmniy1dvu0007yyox23jbyl9k',
      name: 'Artem',
      email: 'string.art@gmail.com',
    });
    console.log('🚀resPostCamperBooking:', resPostCamperBooking);
  };
  return (
    <section className={css['hero']}>
      <div className={`container ${css['hero-container']}`}>
        <div className={css['title-container']}>
          <h1 className={css['hero-title']}>Campers of your dreams</h1>
          <h2 className={css['hero-massage']}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <Button text="View Now" onClick={handleClick} />
      </div>
      {/* <Article {...tmpC} /> */}
      {/* <FilterForm /> */}
      {/* <BookingForm /> */}
      {/* <ReviewsBlock reviews={reviews} /> */}
      {/* <InfoCamper camper={camper} /> */}
    </section>
  );
}

export default Hero;
