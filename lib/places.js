import dbConnect from '../utils/dbConnect';
import Place from '../models/Place';
import City from '../models/City';

export async function getPlacesIds() {
    await dbConnect();
    const placesSearchName = await Place.find().select('searchName -_id');
    return placesSearchName.map(({searchName}) => {
        return {
            params: {
                id: searchName
            }
        }
    })
}

export async function getPlace(searchName) {
    await dbConnect();
    let place = await Place.find({"searchName": searchName});
    place = JSON.parse(JSON.stringify(place));
    return {
        place
    }
}