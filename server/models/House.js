import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
  {
    bedrooms:{type: Number, required: true, min: 1, max:50},
    bathrooms:{type: Number, required: true, min: 1, max:50},
    levels: {type: Number, required: true, min: 1, max:50},
    year: {type: Number, required: true, min: 1600, max:3000},
    price: {type: Number, required: true, min: 1, max:20000000},
    img: {type: String, maxLength:600},
    description: {type: String, maxLength:1000},
  },

  { timestamps: true, toJSON: { virtuals: true } }
)