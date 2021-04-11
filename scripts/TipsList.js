import {database} from "./database.js"

export const TipsList = () => {
  // define a tips variable from the database
  const tips = database.tips
  
  // create an HTML tag
  let htmlString = '<ul>'

  //Iterate over the tips object and add HTML to the htmlString
  for (const tip of tips) {
    htmlString += `<li>${tip}</li>`
  }

  //add the closing tag
  htmlString += `</ul>`
  console.log(tips)
  return htmlString;


}