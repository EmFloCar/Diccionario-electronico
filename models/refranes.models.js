const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const blogSchema = new Schema({

   refran:  {
     type: String,
     required: true,
   },

   isoglosa: {
     type: String,
     required: true,
   },

   acto_de_habla:{
     type: String,
     required: true,
   },

   explicacion:{
     type: String,
     required: true,
   },

   ejemplo:{
     type: String,
     required: true,
   }
 });

 const Refran = mongoose.model("refran", blogSchema);

module.exports = Refran;
