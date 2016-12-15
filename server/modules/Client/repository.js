const mongoose = require('mongoose');
const clientSchema = require('./schema');
export default mongoose.model('Client', clientSchema);