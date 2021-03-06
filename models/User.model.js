
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema (

    {
    username: { type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    imageUrl: String,
    dateOfBirth: String,
    phoneNumber: [{type: String}],
    bookings: [{type: Schema.Types.ObjectId, ref:"Booking"}],
    isProvider: Boolean,
    spaces: [{type: Schema.Types.ObjectId, ref:"Space"}],
    //reviews: [{reviewID: {type: Schema.Types.ObjectId, ref:"Review"}}]
    },
    {   timestamps:
        {created_at: "created_at",
         updated_at: "updated_at"}
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;