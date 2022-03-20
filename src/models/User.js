import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        minLength: 5,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 5,
        required: true
    }
}, { timestamps: true });
export default mongoose.model('User', UserSchema);