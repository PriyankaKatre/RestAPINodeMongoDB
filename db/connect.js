
import mongoose from 'mongoose';

export const connectDB = (uri) => {
  console.log("inside connect");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
