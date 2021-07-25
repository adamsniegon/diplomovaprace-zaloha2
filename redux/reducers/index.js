import placesReducer from './placesReducer';
import citiesReducer from './citiesReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    places: placesReducer,
    cities: citiesReducer
});

export default allReducers;