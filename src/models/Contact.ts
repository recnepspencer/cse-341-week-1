import mongoose, { Schema, Document } from 'mongoose';

interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  favoriteColor: string;
  birthday: Date;
}

const ContactSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  favoriteColor: { type: String, required: true },
  birthday: { type: Date, required: true }
});

const Contact = mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;