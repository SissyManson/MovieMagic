const { Schema, model } = require('mongoose');

const userSchema = new Schema({
   email: {
      type: String,
      required: true,
      toLowerCase: true,
   },
   password: {
      type: String,
      required: true,
      minLength: 8,
   },
});

const User = model('User', userSchema);

module.exports = User;
