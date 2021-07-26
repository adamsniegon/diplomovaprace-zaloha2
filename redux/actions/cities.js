import * as types from "../types";
import axios from 'axios';
import {normalize, schema} from "normalizr";

export const citiesFetchStart = () => {
    return {
        type: types.CITIES_FETCH_START
    }
}

export const citiesFetchSuccess = (cities, citiesIds) => {
    return {
        type: types.CITIES_FETCH_SUCCESS,
        payload: {
            cities,
            citiesIds
        }
    }
}

export const citiesFetchError = (error) => {
    return {
        type: types.CITIES_FETCH_ERROR,
        payload: error
    }
}

export const citiesFetchRefresh = () => {
    return {
        type: types.CITIES_FETCH_REFRESH
    }
}

export const citiesFetch = () => async (dispatch) => {
    dispatch(citiesFetchStart());
    try {
        const {data: cities} = await axios.get(process.env.STRAPI + "/cities");
        const citySchema = new schema.Entity('cities');
        const normalizedData = normalize(cities, [citySchema]);
        dispatch(citiesFetchSuccess(normalizedData.entities.cities, normalizedData.result));
    } catch (error) {
        dispatch(citiesFetchError(error));
    }
}