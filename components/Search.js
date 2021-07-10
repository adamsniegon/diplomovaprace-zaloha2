import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Search.module.css';
import search from '../public/search.svg';

export default function Logo() {
  return (
      <div className={styles.search}>
          <input className={styles.input} type="text"></input>
          <div className={styles.iconWrapper}>
            <Image className={styles.icon} src={search} width={20} height={20}/>
          </div>
      </div>
  )
}