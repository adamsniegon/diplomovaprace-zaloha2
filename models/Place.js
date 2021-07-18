const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    searchName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Feature']
        },
        geometry: {
            type: {
                type: String,
                enum: ['Point']
            },
            coordinates: {
                type: [Number]
            },
        },
        properties: {
            city: String
        }
    },
    cityReference: {
        type: Schema.Types.ObjectId,
        ref: 'cities'
    }
}, {
    timestamps: true
});
 
 export default mongoose.models.places || mongoose.model('places', PlaceSchema)