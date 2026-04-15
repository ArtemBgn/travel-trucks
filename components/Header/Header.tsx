import Logo from './Logo/Logo';
import css from './Header.module.css';
import NavLink from './NavLink/NavLink';
import Link from 'next/link';

function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css['header-container']}`}>
        <Link href="/" className={css.logo}>
          <Logo />
        </Link>
        <nav className={css.navigation}>
          <ul className={css['navigation-list']}>
            <li className={css['navigation-item']}>
              <NavLink hrefname="/" text="Home" />
            </li>
            <li className={css['navigation-item']}>
              <NavLink hrefname="/catalog" text="Catalog" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
