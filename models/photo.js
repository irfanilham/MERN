const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  photo: {
    type: Buffer
  },
  name: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
},
species_type: {
    type: String,
    default: null
},
ripe_lvl: {
    type: Number,
    default: null
},
to_remind: {
    type: Boolean,
    default: false
}
});
module.exports = Photo = mongoose.model('photo', PhotoSchema)
