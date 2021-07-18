import dbConnect from '../../../utils/dbConnect';
import Place from '../../../models/Place';
import City from '../../../models/City';

/**
 * Get all places
 * @param {*} req 
 * @param {*} res 
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(400).send({message: "Bad request"});
  }

  await dbConnect();
  try {
    const places = await Place.find();
    res.send({
        success: true,
        count: places.length,
        data: places
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({message: "Not found"});    
  }
}