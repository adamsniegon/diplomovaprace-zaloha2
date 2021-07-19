import styles from '../styles/ContentWrapper.module.css';

export default function ContentWrapper({children}) {
  return (
    <div className={styles.contentWrapper}>
        {children}
    </div>
  )
}