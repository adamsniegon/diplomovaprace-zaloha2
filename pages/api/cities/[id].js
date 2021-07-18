import dbConnect from '../../../utils/dbConnect';
import City from '../../../models/City';
import Place from '../../../models/Place';

/**
 * Get city by searchName
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
        const city = await City.find({"searchName": id}).populate({path: 'places'});
        res.send(city);
    } catch (error) {
        console.log(error);
        res.status(404).send({message: "Not found"});
    }
}