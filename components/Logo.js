import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Logo.module.css';
import logo from '../public/logo.svg';

export default function Logo() {
  return (
    <Link href="/">
        <a className={styles.link}>
            <Image className={styles.logo} src={logo} width={100} height={40}/>
        </a>
    </Link>
  )
}