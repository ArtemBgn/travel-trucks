import css from './Hero.module.css';
import Button from '../Button/Button';
import Link from 'next/link';

function Hero() {
  return (
    <section className={css['hero']}>
      <div className="container">
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
