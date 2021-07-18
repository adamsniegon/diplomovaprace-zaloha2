import { combineReducers } from 'redux'
import * as types from './types'

const initialState = {
  places: {},
  placesIds: [],
  error: null,
  loading: false
}

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PLACES_FETCH_START:
        return {
            ...state,
            loading: true,
            error: null
        }

    case types.PLACES_FETCH_SUCCESS:
        return {
            ...state,
            loading: false,
            places: action.payload.places,
            placesIds: action.payload.placesIds
        }

    case types.PLACES_FETCH_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }

    case types.PLACES_FETCH_REFRESH:
        return {
            ...state,
            loading: false,
            error: null,
            places: {},
            placesIds: []
        }

    default:
        return state
  }
}

// COMBINED REDUCERS
const reducers = {
  places: placesReducer,
}

export default combineReducers(reducers)