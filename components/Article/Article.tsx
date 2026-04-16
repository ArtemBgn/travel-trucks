import Image from 'next/image';
import css from './Article.module.css';
import Button from '../Button/Button';
import { Camper } from '@/lib/types/apiTypes';
import { FaStar } from 'react-icons/fa';
import { IoCarSharp, IoMapOutline } from 'react-icons/io5';
import { RiGasStationFill } from 'react-icons/ri';
import { TbManualGearbox } from 'react-icons/tb';

function Article(tmp: Camper) {
  const descr = tmp.description.split('.');

  return (
    <div className={css['article-class']}>
      <div className={css['block-img']}>
        <Image
          className={css['the-img']}
          src={tmp.coverImage}
          alt={tmp.description.split('.')[0]}
          width={219}
          height={240}
        />
        {/*fill />*/}
      </div>
      <div className={css['block-info']}>
        <div className={css['header-info']}>
          <div className={css['header-title']}>
            <h3 className={css['title-name']}>{tmp.name}</h3>
            <strong className={css['title-price']}>€{tmp.price}</strong>
          </div>
          <div className={css['header-title-data']}>
            <p className={css['header-title-rating-location']}>
              <FaStar className={css['rating-star']} />
              <span className={css['title-data-text']}>
                {tmp.rating}({tmp.totalReviews} Reviews)
              </span>
            </p>
            <p className={css['header-title-rating-location']}>
              <IoMapOutline className={css['location-map']} />
              <span className={css['title-data-text']}>{tmp.location}</span>
            </p>
          </div>
        </div>
        <p className={css['str-description']}>{tmp.description}</p>
        <ul className={css['data-characters']}>
          <li className={css['character-ciclyn']}>
            <RiGasStationFill className={css['character-icon']} />
            <span className={css['character-text']}>{tmp.engine}</span>
          </li>
          <li className={css['character-ciclyn']}>
            <TbManualGearbox className={css['character-icon']} />
            <span className={css['character-text']}>{tmp.transmission}</span>
          </li>
          <li className={css['character-ciclyn']}>
            <IoCarSharp className={css['character-icon']} />
            <span className={css['character-text']}>{tmp.form}</span>
          </li>
        </ul>
        <Button text="Show more" className={css['btn-show-more']} />
      </div>
    </div>
  );
}

export default Article;
