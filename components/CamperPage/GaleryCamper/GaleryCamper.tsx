'use client';
import { GalleryItem } from '@/lib/types/apiTypes';
import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import css from './GaleryCamper.module.css';
import Image from 'next/image';

interface GaleryCamper {
  campersImgItem: GalleryItem[];
}

function GaleryCamper({ campersImgItem }: GaleryCamper) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={css['gallery-container']}>
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
            <Image
              src={img.original}
              alt={`Slide ${index}`}
              width={638}
              height={505}
              //   fill
              style={{ objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
              <Image
                src={img.thumb}
                alt={`Thumb ${index}`}
                width={136}
                height={144}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GaleryCamper;
