import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const JobSchema = new Schema(
  {
    company:{type: String, required: true, minLength:2, maxLength:30},
    jobTitle:{type: String, required: true, minLength:2, maxLength:30},
    rate:{type: Number, required: true, min:0, max:1000000},
    hours:{type: Number, required: true, min:0, max:80},
    description:{type: String, maxLength:1000}
  },

  
  { timestamps: true, toJSON: { virtuals: true } }
)