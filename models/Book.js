// The model for Book to be used in mongo

"use strict"

const mongoose = require("mongoose") ;

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// const modelMaker =  require( './book_model.js' )  ;

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// console.log('In Book schema');

// import schema object from mongoose 
const {Schema} = mongoose ;

// create a Book schema
const bookSchema = new Schema({ 
  title: {type: String , required: true},
  description: {type: String , required:true },
  status: {type: String , required:true },
});


//define model 
// upper case this one 
const BookModel = mongoose.model('Book',bookSchema ) ;





module.exports = BookModel ;
