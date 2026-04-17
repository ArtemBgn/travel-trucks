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
import FilterForm from '../FilterForm/FilterForm';
import BookingForm from '../BookingForm/BookingForm';
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
      <BookingForm />
    </section>
  );
}

export default Hero;
