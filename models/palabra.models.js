const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const blogSchema = new Schema({

   nombre:  {
     type: String,
     required: true,
   },

   informacion_gramatical: {
     type: String,
     required: true,
   },

   hiperonimo:{
     type: String,
     required: true,
   },

   hiponimo:{
     type: String,
     required: true,
   },

   significado:{
     type: String,
     required: true,
   },

   ejemplo:{
     type: String,
     required: true,
   }
 });

 const Palabra = mongoose.model("Palabra", blogSchema);

module.exports = Palabra;
