import dbConnect from '../../utils/dbConnect';
import City from '../../models/City';

/**
 * Get all cities
 * @param {*} req 
 * @param {*} res 
 */
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(400).send({message: "Bad request"});
    }

    await dbConnect();
    try {
        const cities = await City.find().populate({path: 'places'});
        res.send({
            success: true,
            count: cities.length,
            data: cities
        });
    } catch (error) {
        res.status(404).send({message: "Not found"});   
    }
}