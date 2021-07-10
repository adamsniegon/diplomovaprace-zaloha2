const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String
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
        }
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

CitySchema.virtual('places', {
    ref: 'places',
    localField: '_id',
    foreignField: 'cityReference'
 });

 export default mongoose.models.cities || mongoose.model('cities', CitySchema)