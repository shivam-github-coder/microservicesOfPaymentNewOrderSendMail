import * as Mongoose  from "mongoose";


export const userSchema = new Mongoose.Schema({
    name:String,
    email:String,
    price:Number
});
