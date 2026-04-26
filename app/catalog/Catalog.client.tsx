'use client';
import { useEffect, useRef } from 'react';
import Article from '@/components/Article/Article';
import css from './CatalogPage.module.css';
import Button from '@/components/Button/Button';
import { useInfiniteCampers } from '@/hooks/useInfiniteCampers';
import { useFilterStore } from '@/store/useFilterStore';
import { useShallow } from 'zustand/shallow';
import Loader from '@/components/Loader/Loader';

function CatalogClient() {
  const filters = useFilterStore(
    useShallow(state => ({
      location: state.location,
      form: state.form,
      transmission: state.transmission,
      engine: state.engine,
    })),
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteCampers(filters);
  const campers = data?.pages.flatMap(page => page.campers) || [];

  const listRef = useRef<HTMLUListElement>(null);

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
      {status === 'pending' && <Loader />}
      <ul ref={listRef} className={css['list-articlies']}>
        {campers.map(camper => {
          return (
            <li key={camper.id}>
              <Article camper={camper} />
            </li>
          );
        })}
      </ul>
      {campers.length === 0 && status !== 'pending' && (
        <p>
          Sorry, no suitable campsites were found! Try changing your search
          criteria...
        </p>
      )}

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
