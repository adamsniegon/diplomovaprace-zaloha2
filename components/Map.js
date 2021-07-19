import {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet';
import L from 'leaflet';
import Head from 'next/head';
import styles from '../styles/Map.module.css';

export default function Map() {
    const [view, setView] = useState([49.848610,18.512469]);
    const [zoom, setZoom] = useState(12);
    return (
        <>
            <Head>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
            </Head>

            <div className={styles.map}>
                <MapContainer className={styles.map__container} center={view} zoom={zoom} zoomControl={false}>
                    <ZoomControl position="topright"/>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                </MapContainer>
            </div>
        </>
    );
}