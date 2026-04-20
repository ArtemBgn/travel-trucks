// 'use client';
import css from './Hero.module.css';
import Button from '../Button/Button';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

function Hero() {
  /*const handleClick = async () => {
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
  };/**/

  // const rout = useRouter();

  return (
    <section className={css['hero']}>
      <div className={`container ${css['hero-container']}`}>
        <div className={css['title-container']}>
          <h1 className={css['hero-title']}>Campers of your dreams</h1>
          <h2 className={css['hero-massage']}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <Link href={'/catalog'}>
          <Button text="View Now" className={css['button-rout']} />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
