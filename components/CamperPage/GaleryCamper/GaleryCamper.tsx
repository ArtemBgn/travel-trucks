import { GalleryItem } from '@/lib/types/apiTypes';
import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import css from './GaleryCamper.module.css';

interface GaleryCamper {
  campersImgItem: GalleryItem[];
}

/*
{
    id: 'cmniy1dx0001zyyox38fzpg95',
    camperId: 'cmniy1dx0001yyyoxyac2tiki',
    thumb:
      'https://ac.goit.global/fullstack/career/campers/kuga-camper/kuga-camper-1.jpg',
    original:
      'https://ac.goit.global/fullstack/career/campers/kuga-camper/kuga-camper-1.jpg',
    order: 1,
  }
/**/

function GaleryCamper({ campersImgItem }: GaleryCamper) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    // <div className={css['gallery-block']}>
    <div className={css['gallery-container']}>
      {/* Основной большой слайдер */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper,
          // && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
        className={css['main-swiper']}
      >
        {campersImgItem.map((img, index) => (
          <SwiperSlide key={`main-${index}`}>
            <img src={img.original} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Нижний слайдер с превью (Thumbs) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css['thumbs-swiper']}
      >
        {campersImgItem.map((img, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <div className={css['thumb-wrapper']}>
              <img src={img.thumb} alt={`Thumb ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // </div>
  );
}

export default GaleryCamper;
