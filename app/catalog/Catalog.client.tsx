'use client';
import { useEffect, useRef } from 'react';
import Article from '@/components/Article/Article';
import css from './CatalogPage.module.css';
import Button from '@/components/Button/Button';
import { useInfiniteCampers } from '@/hooks/useInfiniteCampers';
import { useFilterStore } from '@/store/useFilterStore';
import { useShallow } from 'zustand/shallow';

function CatalogClient() {
  const filters = useFilterStore(
    useShallow(state => ({
      location: state.location,
      form: state.form,
      transmission: state.transmission,
      engine: state.engine,
    })),
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteCampers(filters);
  const campers = data?.pages.flatMap(page => page.campers) || [];

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (campers.length > 4 && !isFetchingNextPage) {
      const container = listRef.current;
      if (container && container.lastElementChild) {
        window.scrollBy({
          top: 444,
          behavior: 'smooth',
        });
      }
    }
  }, [campers.length, isFetchingNextPage]);

  return (
    <>
      <div ref={listRef} className={css['list-articlies']}>
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
