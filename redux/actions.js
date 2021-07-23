import * as types from "./types";
import axios from 'axios';
import {normalize, schema} from "normalizr";

export const placesFetchStart = () => {
    return {
        type: types.PLACES_FETCH_START
    }
}

export const placesFetchSuccess = (places, placesIds) => {
    return {
        type: types.PLACES_FETCH_SUCCESS,
        payload: {
            places,
            placesIds
        }
    }
}

export const placesFetchError = (error) => {
    return {
        type: types.PLACES_FETCH_ERROR,
        payload: error
    }
}

export const placesFetchRefresh = () => {
    return {
        type: types.PLACES_FETCH_REFRESH
    }
}

export const placesFetch = () => async (dispatch) => {
    dispatch(placesFetchStart());
    try {
        const {data: places} = await axios.get(process.env.STRAPI + "/places");
        const newPlacesFormat = places.map(place => {
            return {
                id: place.id,
                name: place.name,
                description: place.description,
                image: place.image,
                url: place.url,
                city: {
                    id: place.city.id,
                    name: place.city.name
                },
                geojson: place.geojson
            }
        })
        const placeSchema = new schema.Entity('places');
        const normalizedData = normalize(newPlacesFormat, [placeSchema]);
        dispatch(placesFetchSuccess(normalizedData.entities.places, normalizedData.result));
    } catch (error) {
        dispatch(placesFetchError(error));
    }
}