'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

//////////////////
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_KEY);



// const booksModel = require('./models/Book.js');
const BookModel = require('./models/Book.js');


// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

//////////////////////


  


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('test request received')
})


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// import schema 


app.get('/books' , getBooks); 


  // Returns All Books 
  // async function getBooks(request , response , next ){

  //   try{
  //     let output = await BookModel.find() ;
  //     response.status(200).send(output);
    
  //       }
  //   catch(error){
  //     next(error);
    
  //       }

  // }


  // http://localhost:3002/books?title=A

  async function getBooks(request, response, next) {
    try {
      let queryObject = {}
      if (request.query.title) {
        queryObject.title = request.query.title;
      }
      let results = await BookModel.find(queryObject);
      response.status(200).send(results);
    } catch(err) {
      next(err);
    }
  }



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.status(200).send('works');
});






//************************************************************************* */
//************************************************************************* */
//************************************************************************* */
// Lab 12 

// app.post('/cats', postCats);
// app.delete('/cats/:id', deleteCats);

app.use(express.json());


// send new book
app.post('/books' , postBook) ;


async function postBook( request , response , next ){
  console.log( request.body);

  try{
      let createdBook = await BookModel.create(request.body);

      // response.status(200).send('WORKS');  // WORKS
      response.status(200).send( createdBook );
     } 
  catch(error){
              next(error) ;
              }


}

// route to delete a book by id 



app.delete('/books/:id' , deleteBook) ;

    async function deleteBook(request , response , next)  {
      // get id from path 
      let id = request.params.id;
      console.log(id) ;
       console.log(id) ;

      try{

            await BookModel.findByIdAndDelete(id) ;
            response.status(200).send('book deleted') ;

      }catch(error){
            next(error) ;
        }




      }




//************************************************************************* */
//************************************************************************* */
//************************************************************************* */

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// at the bottom of all our routes:
app.get('*', (request, response) => {



  response.send('Not sure what you are a looking for, but it isn\'t here.');
});

////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

    
app.listen(PORT, () => console.log(`listening on ${PORT}`)); 
