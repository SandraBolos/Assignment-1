
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    contact: String,
    email: String,

}, {
    timestamps: true, 
    collection: 'contacts'
});

export default mongoose.model("contacts", ContactSchema);
