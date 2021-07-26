import {useSelector} from 'react-redux';
import Link from 'next/link';
import styles from '../styles/CityCard.module.css';

export default function CityCard({id}) {
  const city = useSelector(state => state.cities.cities[id]);
  
  return (
    <div className={styles.card}>
      {city && (
        <Link href={'/cities/' + city.url}>
          <a className={styles.card__link}>
            <div className="card__image"></div>
            <div className={styles.card__info}>
              <img className={styles.card__icon} src={'/icon-pin.svg'}></img>
              <p className={styles.card__name}>{city.name}</p>
            </div>
          </a>
        </Link>
      )}
      <style jsx>{`
        .card__image{
          height: 130px;
          background: url(${city.image[0].formats.thumbnail.url});
          background-size: cover;
          background-position: center center;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      `}</style>
    </div>
  )
}