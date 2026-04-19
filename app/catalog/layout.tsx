'use client';
import css from './CatalogPage.module.css';
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  const path: string[] = usePathname().split('/');
  const isCatalog: boolean = path.length < 3 && path.includes('catalog');
  return (
    <>
      <Header />
      <main
        className={`container ${isCatalog ? css['parent-page-catalog'] : ''}`}
      >
        {isCatalog && (
          <aside className={css['place-for-form']}>{sidebar}</aside>
        )}
        <div className={isCatalog ? css['place-array-articlies'] : ''}>
          {children}
        </div>
      </main>
    </>
  );
}
