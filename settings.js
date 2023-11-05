const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data_model = new Schema({
  validator: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Settings = mongoose.model('Settings', data_model);
module.exports = Settings;
