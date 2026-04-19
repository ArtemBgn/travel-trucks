'use client';
import Article from '@/components/Article/Article';
import css from './CatalogPage.module.css';
import Button from '@/components/Button/Button';
import { useInfiniteCampers } from '@/hooks/useInfiniteCampers';

function CatalogClient() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteCampers({});
  const campers = data?.pages.flatMap(page => page.campers) || [];

  console.log('🚀 ~ CatalogClient ~ campers:', campers);

  return (
    <>
      <div className={css['list-articlies']}>
        {campers.map(camper => {
          return <Article key={camper.id} camper={camper} />;
        })}
      </div>
      {hasNextPage && (
        <Button
          text={isFetchingNextPage ? 'Loading...' : 'Load more'}
          onClick={() => fetchNextPage()}
          className={css['button-outh-color']}
          disabled={isFetchingNextPage}
        />
      )}
    </>
  );
}

export default CatalogClient;
