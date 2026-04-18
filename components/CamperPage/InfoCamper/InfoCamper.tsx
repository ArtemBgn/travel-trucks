import { GetCamperResponse } from '@/lib/types/apiTypes';
import css from './InfoCamper.module.css';
import { FaStar } from 'react-icons/fa';
import { IoMapOutline } from 'react-icons/io5';

interface InfoCamperProps {
  camper: GetCamperResponse;
}
/*
interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: string; // возможно заменить типизацию
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string; // возможно заменить типизацию
  engine: string; // возможно заменить типизацию
  amenities: string; // возможно заменить типизацию
  gallery: GalleryItem[];
  createdAt: string;
  updatedAt: string;
}/**/

function InfoCamper({ camper }: InfoCamperProps) {
  return (
    <div className={css['details-block']}>
      <div className={css['block-info']}>
        <div className={css['header-info']}>
          <h2 className={css['title-name']}>{camper.name}</h2>
          <div className={css['header-title-data']}>
            <p className={css['header-title-rating-location']}>
              <FaStar className={css['rating-star']} />
              <span className={css['title-data-text']}>
                {camper.rating}({camper.totalReviews} Reviews)
              </span>
            </p>
            <p className={css['header-title-rating-location']}>
              <IoMapOutline className={css['location-map']} />
              <span className={css['title-data-text']}>{camper.location}</span>
            </p>
          </div>
          <strong className={css['title-price']}>€{camper.price}</strong>
        </div>
        <p className={css['str-description']}>{camper.description}</p>
      </div>
      <div className={css['block-info']}>
        <h2 className={css['title-name']}>Vehicle details</h2>
        <ul className={css['data-characters']}>
          {camper.amenities.map(item => {
            let word = item;
            if (item.length < 3) word = item.toUpperCase();
            return (
              <li key={item} className={css['character-ciclyn']}>
                <span className={css['character-text']}>{word}</span>
              </li>
            );
          })}
        </ul>
        <hr className="divider" />
        <dl className={css['characteristics-block']}>
          <div className={css['characteristic-str']}>
            <dt className={css['characteristic-key']}>Form</dt>
            <dd className={css['characteristic-value']}>{camper.form}</dd>
          </div>
          <div className={css['characteristic-str']}>
            <dt className={css['characteristic-key']}>Length</dt>
            <dd className={css['characteristic-value']}>{camper.length}</dd>
          </div>
          <div className={css['characteristic-str']}>
            <dt className={css['characteristic-key']}>Width</dt>
            <dd className={css['characteristic-value']}>{camper.width}</dd>
          </div>
          <div className={css['characteristic-str']}>
            <dt className={css['characteristic-key']}>Height</dt>
            <dd className={css['characteristic-value']}>{camper.height}</dd>
          </div>
          <div className={css['characteristic-str']}>
            <dt className={css['characteristic-key']}>Tank</dt>
            <dd className={css['characteristic-value']}>{camper.tank}</dd>
          </div>
          <div className={css['characteristic-str']}>
            <dt className={css['characteristic-key']}>Consumption</dt>
            <dd className={css['characteristic-value']}>
              {camper.consumption}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default InfoCamper;
