const mongoose = require("mongoose");

const bcrypt = require("bcrypt");


const { Schema } = mongoose;
const { Types } = Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password :{
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    trim: true,
    defult: null,
  }
}, {
  _id: true,
  timestamps: true,
  collection: "users",
  toJSON: {
    transformi(doc, ret){
      delete ret.password;
      delete ret.__v;
      return ret
    } 
  }
});

UserSchema.pre('save', async function preSave(next) {
  if(this.isNew) {
    try {
      console.log('PASSWORD CONVERTING INTO HASH');
      this.password = await bcrypt.hash(this.password, 10);
      return next();
    } catch(err) {
      return next(err);
    }
  }
  next();
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;

