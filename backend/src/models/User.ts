import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: String,
  avatar: String,
  googleId: String,
});