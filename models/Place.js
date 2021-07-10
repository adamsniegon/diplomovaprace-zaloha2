const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new mongoose.Schema({
    name: {
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
        ref: 'places'
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    id: false
});

PlaceSchema.virtual('city', {
    ref: 'cities',
    localField: 'cityReference',
    foreignField: '_id',
    justOne: true
 });

PlaceSchema.virtual('reviews', {
    ref: 'reviews',
    localField: '_id',
    foreignField: 'placeReference'
 });
 
 export default mongoose.models.places || mongoose.model('places', PlaceSchema)