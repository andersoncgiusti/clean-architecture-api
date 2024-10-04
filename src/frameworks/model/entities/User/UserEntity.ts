import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  permission: number
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  permission: { type: Number, required: true }
})

export default mongoose.model<IUser>('User', UserSchema)
