import dbConnect from '../../../utils/dbConnect';
import Place from '../../../models/Place';
import City from '../../../models/City';

/**
 * Get place by searchName
 * @param {*} req
 * @param {*} res
 */
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(400).send({message: "Bad request"});
    }

    await dbConnect();
    try {
        const {id} = req.query;
        const place = await Place.find({"searchName": id});
        res.send(place);
    } catch (error) {
        console.log(error);
        res.status(404).send({message: "Not found"});    
    }
}