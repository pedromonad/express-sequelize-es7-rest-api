const mongoose = require('mongoose');
const userSchema = require('./schema');
export default mongoose.model('User', userSchema);