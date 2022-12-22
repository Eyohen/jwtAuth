const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 3,
    },
    posts:[{type: mongoose.Types.ObjectId, ref: "Post" }],
},{
    timestamp: true
}
);

module.exports = model("User", userSchema);