const { Schema, model, MongooseError } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
   email: {
      type: String,
      required: true,
      toLowerCase: true,
      unique: true, // index
      match: [/@\w+\.\w+$/, 'Invalid Email Address!'],
      minLength: [10, 'Email must be at least 10 characters long!'],
   },
   password: {
      type: String,
      required: true,
      match: [
         /^\w+$/,
         'Password must be at least 6 characters long and alphanumeric!',
      ],
      minLength: 6,
   },
});

userSchema.pre('save', async function () {
   const hash = await bcrypt.hash(this.password, 12);

   this.password = hash;
});

userSchema.virtual('rePassword').set(function (value) {
   // Validate
   if (value !== this.password) throw new MongooseError('Password missmatch');
});

const User = model('User', userSchema);

module.exports = User;
