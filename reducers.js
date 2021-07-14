import { combineReducers } from 'redux'
import * as types from './types'

const initialState = {
  cities: {},
  places: {},
  citiesIds: [],
  placesIds: [],
  error: null,
  loading: false
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_FETCH_START:
        return {
            ...state,
            loading: true,
            error: null
        }

    case types.DATA_FETCH_SUCCESS:
        return {
            ...state,
            loading: false,
            cities: action.payload.cities,
            places: action.payload.places,
            citiesIds: action.payload.citiesIds,
            placesIds: action.payload.placesIds
        }

    case types.DATA_FETCH_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }

    case types.DATA_FETCH_REFRESH:
        return {
            ...state,
            loading: false,
            error: null,
            cities: {},
            places: {},
            citiesIds: [],
            placesIds: []
        }

    default:
        return state
  }
}

// COMBINED REDUCERS
const reducers = {
  data: dataReducer,
}

export default combineReducers(reducers)