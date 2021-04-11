//import database
import {database} from './database.js'

//create function and export it
export const QuoteList = () => {

  //create a variable to hold the quotes
  const quotes = database.quotes
  console.log(quotes)
  //create HTMLstring equal to and article opening tag
  let htmlString = `<article class="quoteList quotes">`

  //iterate over the quotes
  for (const quote of quotes) {

    htmlString+= `<div class="quote">
      <p>${quote.quote}</p>
      <p>- ${quote.person}</p>
      </div>
    `
  }

  //add closing tag
  htmlString += `</article>`
  console.log(htmlString)
  return htmlString

}
