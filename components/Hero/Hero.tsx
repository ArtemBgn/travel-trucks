import css from './Hero.module.css';
import Button from '../Button/Button';

function Hero() {
  return (
    <section className={css['hero']}>
      <div className={`container ${css['hero-container']}`}>
        <div className={css['title-container']}>
          <h1 className={css['hero-title']}>Campers of your dreams</h1>
          <h2 className={css['hero-massage']}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <Button text="View Now" />
      </div>
    </section>
  );
}

export default Hero;
