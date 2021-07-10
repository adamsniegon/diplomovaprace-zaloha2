import Logo from './Logo';
import Navigation from './Navigation';
import Search from './Search';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <Logo/>
        <Navigation/>
        <Search/>
      </div>
    </div>
  )
}