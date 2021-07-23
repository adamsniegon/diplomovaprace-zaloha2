import {useSelector} from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/PlaceCard.module.css';

export default function PlaceCard({id}) {
  const place = useSelector(state => state.places.places[id]);
  return (
    <div className={styles.card}>
      {place && (
        <Link href={'/places/' + place.url}>
          <a className={styles.card__link}>
            <div className="card__image"></div>
            <div className={styles.card__info}>
              <img className={styles.card__icon} src={'/icon-pin.svg'}></img>
              <p className={styles.card__name}>{place.name}</p>
              <img className={styles.card__icon} src={'/icon-location.svg'}></img>
              <p className={styles.card__city}>{place.city.name}</p>
            </div>
          </a>
        </Link>
      )}
      <style jsx>{`
        .card__image{
          height: 130px;
          background: url(${place.image[0].formats.thumbnail.url});
          background-size: cover;
          background-position: center center;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      `}</style>
    </div>
  )
}