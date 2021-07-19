import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import PlaceCard from '../components/PlaceCard';
import ContentWrapper from '../components/ContentWrapper';

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {placesFetch} from '../redux/actions';


export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.places);

  useEffect(() => {
    dispatch(placesFetch());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper>
        <div className={styles.card__wrapper}>
          {data.placesIds && data.placesIds.map(id => (
            <PlaceCard key={id} id={id}/>
          ))}
        </div>
      </ContentWrapper>
    </div>
  )
}