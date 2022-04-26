"use strict"

const mongoose = require("mongoose") ;


// const BookModel = mongoose.model('Book',bookSchema ) ;

function makeModel ( typeName , schema  ){
  
//  console.log(   typeName  )  ;
  const BookModel = mongoose.model(typeName,schema ) ;
  // console.log(BookModel) ;
 
  return BookModel ;
// return('heyoweiroeiuw') ;
}


// function parseWeather(weatherData) {
//   try {
//     const weatherSummaries = weatherData.data.map(day => {
//       return new Weather(day);
//     });
//     return Promise.resolve(weatherSummaries);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }


module.exports = makeModel ;