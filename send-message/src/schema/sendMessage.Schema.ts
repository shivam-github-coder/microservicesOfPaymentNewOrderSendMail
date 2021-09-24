import * as Mongoose  from "mongoose";


export const sendMessageSchema = new Mongoose.Schema({
    name:String,
    email:String,
    price:Number,
    order:String
});
