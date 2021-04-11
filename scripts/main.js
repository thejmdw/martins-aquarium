// Import the FishList function from the correct module
// import {FishList} from './FishList.js'
import {FishList2} from './FishList2.js'
import {LocationList} from './LocationList.js'
import {TipsList} from './TipsList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElementFishes = document.querySelector("#fishes")
const parentHTMLElementLocations = document.getElementById("locations")
const parentHTMLElementTips = document.getElementById("tips")


parentHTMLElementFishes.innerHTML = FishList2()
parentHTMLElementLocations.innerHTML = LocationList()
parentHTMLElementTips.innerHTML = TipsList()

