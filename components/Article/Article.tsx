import Image from 'next/image';
import css from './Article.module.css';
import Button from '../Button/Button';
import { Camper } from '@/lib/types/apiTypes';
import { FaStar } from 'react-icons/fa';
import { IoCarSharp, IoMapOutline } from 'react-icons/io5';
import { RiGasStationFill } from 'react-icons/ri';
import { TbManualGearbox } from 'react-icons/tb';
import Link from 'next/link';

interface ArticleProps {
  camper: Camper;
}

function Article({ camper }: ArticleProps) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    form,
    transmission,
    engine,
    coverImage,
    totalReviews,
  } = camper;
  return (
    <div className={css['article-class']}>
      <div className={css['block-img']}>
        <Image
          className={css['the-img']}
          src={coverImage}
          alt={description.split('.')[0]}
          width={219}
          height={240}
        />
      </div>
      <div className={css['block-info']}>
        <div className={css['header-info']}>
          <div className={css['header-title']}>
            <h3 className={css['title-name']}>{name}</h3>
            <strong className={css['title-price']}>€{price}</strong>
          </div>
          <div className={css['header-title-data']}>
            <p className={css['header-title-rating-location']}>
              <FaStar className={css['rating-star']} />
              <span className={css['title-data-text']}>
                {rating}({totalReviews} Reviews)
              </span>
            </p>
            <p className={css['header-title-rating-location']}>
              <IoMapOutline className={css['location-map']} />
              <span className={css['title-data-text']}>{location}</span>
            </p>
          </div>
        </div>
        <p className={css['str-description']}>{description}</p>
        <ul className={css['data-characters']}>
          <li className={css['character-ciclyn']}>
            <RiGasStationFill className={css['character-icon']} />
            <span className={css['character-text']}>{engine}</span>
          </li>
          <li className={css['character-ciclyn']}>
            <TbManualGearbox className={css['character-icon']} />
            <span className={css['character-text']}>{transmission}</span>
          </li>
          <li className={css['character-ciclyn']}>
            <IoCarSharp className={css['character-icon']} />
            <span className={css['character-text']}>
              {form.replaceAll('_', ' ')}
            </span>
          </li>
        </ul>
        <Link href={`/catalog/${id}`} target="_blank">
          <Button text="Show more" className={css['btn-show-more']} />
        </Link>
      </div>
    </div>
  );
}

export default Article;
