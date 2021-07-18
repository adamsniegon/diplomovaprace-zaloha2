import {getPlacesIds, getPlace} from '../../lib/places';

export async function getStaticProps({params}) {
    const {place} = await getPlace(params.id);
    return {
        props: {
            place: place[0]
        }
    }
}

export async function getStaticPaths() {
    const paths = await getPlacesIds();
    return {
        paths,
        fallback: false
    }
}

export default function Place({place}) {
  return (
    <div>
        <h1>{place.name}</h1>
        <p>{place.description}</p>
    </div>
  )
}