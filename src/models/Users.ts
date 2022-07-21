import mongoose, { Document, Schema } from "mongoose";



export type UserRole = 'customer'| 'admin' 

export interface UserDocument extends Document {
    firstname: string,
    lastname: string,
    email: string,
    role: UserRole
}

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'customer']
  }
  
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const User = mongoose.model<UserDocument>('User', userSchema)
export default User
