import * as Mongoose  from "mongoose";


export const NewOrderSchema = new Mongoose.Schema({
    name:String,
    email:String,
    price:Number,
    order:String
});
