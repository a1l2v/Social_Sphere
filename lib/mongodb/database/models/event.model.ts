import {Schema,models,model,Document, ObjectId } from 'mongoose';
export interface IEvent extends Document {
  _id: String;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  team_size: string;
  contact: string;
  club_description: string;
  club:{ _id: string, name: string };
  category: { _id: string, name: string }
}
const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    team_size:{type:String, required: true},
    contact:{type:String, required: true},
    club_description:{type:String, required: true},
    club:{ type: Schema.Types.ObjectId, ref: 'Club' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  })
  
  const Event = models.Event || model('Event', EventSchema);
  
  export default Event;