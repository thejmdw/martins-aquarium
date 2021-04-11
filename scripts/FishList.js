// Import the function that returns a copy of the fish array
import {database} from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = database.fish

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {
        
        // Why is there a backtick used for this string?
      

        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`
    // console.log(htmlString);
    return htmlString
    
}

