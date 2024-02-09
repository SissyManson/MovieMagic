const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const SECRET = 'fwerfb3w98ibrfowefw93br8fwkuroeadjlguirp';
// TODO: check if user exists
exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
   const user = await User.findOne({ email });
   if (!user) throw new Error('Email or password do not match!');

   const isValid = await bcrypt.compare(password, user.password);
   if (!isValid) throw new Error('Email or password do not match!');

   const payload = {
      _id: user._id,
      email: user.email,
   };
   const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

   return token;
};
