import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
      type: Number,
      required: [ true, 'Price must be provided'],
  },
  featured: {
      type: Boolean,
      default: false,
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "Dell", "MI"],
            message: `{VALUE} is not supported`
        }
    }
});

export default mongoose.model("Product", productSchema)
