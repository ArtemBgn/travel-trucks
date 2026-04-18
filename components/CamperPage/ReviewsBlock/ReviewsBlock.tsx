// 'use client';
// import { getCamperReviews } from '@/lib/api/api';
import css from './ReviewsBlock.module.css';
import { CamperReview } from '@/lib/types/apiTypes';
import { FaStar } from 'react-icons/fa';

interface ReviewsBlockProps {
  reviews: CamperReview[];
}

function ReviewsBlock({ reviews }: ReviewsBlockProps) {
  //   const reviews = await getCamperReviews('cmniy1dvm0000yyoxsi4m4hns');
  return (
    <div className={css['block-for-reviews']}>
      <h2 className={css['title-name-block']}>Reviews</h2>
      <ul className={css['list-reviews']}>
        {reviews
          .slice(0, 2)
          .map(({ id, reviewer_name, reviewer_rating, comment }) => {
            const letterAva = reviewer_name.charAt(0).toUpperCase();
            return (
              <li key={id} className={css['item-review']}>
                <div className={css['review-header-block']}>
                  <span className={css['review-ava']}>{letterAva}</span>
                  <div className={css['review-title-block']}>
                    <h3 className={css['reviewer-name']}>{reviewer_name}</h3>
                    <div className={css['reviewer_rating']}>
                      {[...Array(5)].map((_, index) => {
                        return index + 1 <= reviewer_rating ? (
                          <FaStar className={css['aurum-star']} />
                        ) : (
                          <FaStar className={css['grey-star']} />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <p className={css['review-text']}>{comment}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ReviewsBlock;
