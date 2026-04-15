'use client';

import css from './NavLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

interface NavLinkProps {
  hrefname: string;
  text: string;
}

function NavLink({ hrefname, text }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={hrefname}
      className={clsx(
        css['navigation-link'],
        `${pathname === hrefname ? css['active-link'] : ''}`,
      )}
    >
      {text}
    </Link>
  );
}

export default NavLink;
