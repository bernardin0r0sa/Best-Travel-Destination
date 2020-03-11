const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Country = new Schema({
   name: {
      type: String
   },
   type: {
    type: "array",
    items: {
      type: "string"
    }
   },
   entertainment: {
    type: "array",
    items: {
      type: "string"
    }
   },
   cost: {
    type: String
 },
 region: {
      type: String
   },
  subregion: {
      type: String
   },
  currency: {
      type: String
   },
   language: {
      type: "array",
      items: {
        type: "string"
      }
     },
     capital: {
      type: String
   }
}, {
   collection: 'countries'
})

module.exports = mongoose.model('Country', Country)