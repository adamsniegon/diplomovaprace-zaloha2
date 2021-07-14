import * as types from "./types";
import axios from 'axios';
import {normalize, schema} from "normalizr";

export const dataFetchStart = () => {
    return {
        type: types.DATA_FETCH_START
    }
}

export const dataFetchSuccess = (cities, places, citiesIds, placesIds) => {
    return {
        type: types.DATA_FETCH_SUCCESS,
        payload: {
            cities,
            places,
            citiesIds,
            placesIds
        }
    }
}

export const dataFetchError = (error) => {
    return {
        type: types.DATA_FETCH_ERROR,
        payload: error
    }
}

export const dataFetchRefresh = () => {
    return {
        type: types.DATA_FETCH_REFRESH
    }
}

export const dataFetch = () => async (dispatch) => {
    dispatch(dataFetchStart());
    try {
        const cities = await axios.get('/api/cities');
        const placeSchema = new schema.Entity('places', {}, {
            idAttribute: "_id"
        });
        const citySchema = new schema.Entity('cities', {
            places: [placeSchema]
        }, {
            idAttribute: "_id"
        });
        const normalizedData = normalize(cities.data.data, [citySchema]);
        const arrayOfPlaceIds = Object.keys(normalizedData.entities.places);
        dispatch(dataFetchSuccess(normalizedData.entities.cities, normalizedData.entities.places, normalizedData.result, arrayOfPlaceIds));
    } catch (error) {
        dispatch(dataFetchError(error));
    }
}