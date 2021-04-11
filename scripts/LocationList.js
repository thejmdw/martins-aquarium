import {database} from "./database.js"

export const LocationList = () => {

  const locations = database.locations

  let htmlString = '<article class="locationList locations">'

  for (const location of locations) {
    htmlString += `<section class="location card">
    <div><img class="location__image image--card" src="${location.image}" /></div>
    <div class="location__name">${location.name}</div>
    <div class="location__fish-harvested">${location.fishHarvested}</div>
</section>
`
  }
  htmlString += `</article>`
  console.log(locations)
  return htmlString
}
