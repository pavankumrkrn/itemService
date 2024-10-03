import mongoose, { Schema } from "mongoose"
import { User } from "../Interfaces/interfaces";

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model<User>('User', userSchema);

export default User;

