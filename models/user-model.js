import mongoose, {Schema} from "mongoose";

const schema = new Schema({
  email: {
    required: true,
    type: String
  },
  subject: {
    required: true,
    type: String
  },
  text: {
    required: true,
    type: String
  },
  
});


export const userModel = mongoose.models.users ?? mongoose.model("users", schema);
