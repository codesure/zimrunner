import mongoose from "mongoose";

const AttendeesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registration: { type: String, required: true, unique: true },
  brand: {type: String, required: true},
  color: {type: String, required: true},
  statusi: {type: String},
//   qrcode: {type: String, required: true}
},
{
  timestamps:true,
}

);

const Attendees = mongoose.models.Attendees || mongoose.model('Attendees', AttendeesSchema);

export default Attendees;
