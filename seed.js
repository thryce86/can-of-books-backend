"use strict"

require('dotenv').config() ;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_KEY) ;
const Book = require('./models/Book.js') ;

async function seed(){

await Book.create({
  title: 'Fight Club' ,
  description:  "The first rule about fight club is you don't talk about fight club.",
  status:   'In print ' ,
})



await Book.create({
  title: 'The Song of Achilles: A Novel' ,
  description:  " A s, kings, immortal fame, and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer’s enduring masterwork, The Iliad. An action-packed adventure, an epic love story, a marvelously conceived and executed page-turner, Miller’s monumental debut novel has already earned resounding acclaim from some of contemporary fiction’s brightest lights—and fans of Mary Renault, Bernard Cornwell, Steven Pressfield, and Colleen McCullough’s Masters of Rome series will delight in this unforgettable journey back to ancient Greece in the Age of Heroes.",
  status:   'Bestseller ' ,
})


await Book.create({
  title: 'Sea of Tranquility: A novel' ,
  description:  "NEW YORK TIMES BEST SELLEotel returns with a novel of art, time, love, and plague that takes the reader from Vancouver Island in 1912 to a dark colony on the moon five hundred years later, unfurling a story of humanity across centuries and space",
  status:   'In print ' ,
})

console.log('books added !') ;



// const bookSchema = new Schema({ 
//   title: {type: String , required: true},
//   description: {type: String , required:true },
//   status: {type: String , required:true },
// });


mongoose.disconnect();
}


seed();
