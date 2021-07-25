import * as types from '../types'

const initialState = {
  cities: {},
  citiesIds: [],
  error: null,
  loading: false
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CITIES_FETCH_START:
        return {
            ...state,
            loading: true,
            error: null
        }

    case types.CITIES_FETCH_SUCCESS:
        return {
            ...state,
            loading: false,
            cities: action.payload.cities,
            citiesIds: action.payload.citiesIds
        }

    case types.CITIES_FETCH_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }

    case types.CITIES_FETCH_REFRESH:
        return {
            ...state,
            loading: false,
            error: null,
            cities: {},
            citiesIds: []
        }

    default:
        return state
  }
}

export default citiesReducer;