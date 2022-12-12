import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkers  = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        /*
        the code above allows us to get the HTML element that was clicked on
        the code below checks to see if the element's id that was clicked 
        starts with walker
        */

        if(itemClicked.id.startsWith("walker")) {
            
            const [, walkerId] = itemClicked.id.split("--")
            /*
            the code above splits the element id into an array and stores the 
            second half of the split in a variable called walkerId
            */

        for (const walker of walkers) {
            if (walker.id === parseInt(walkerId)) {
        
            const assignment = compareWalkerCity(walkerId)
            const assignedCityString = assignedCityNames(assignment) 
            window.alert(`${walker.name} services ${assignedCityString}`)
            }
            }
        }
    }
)
const compareWalkerCity = (walker) => {
    //Define an empty array to store the cities assigned to each walker
    const assignedCities = []
    for (const assignedCity of walkerCities) {
        //check if primary key of the walker equals the foreign key on the assigned Cities
        if (assignedCity.walkerId === parseInt(walker)) {
            // If it does, add the current object to the array of assignedCitiess
            assignedCities.push(assignedCity)
        }
    }
    return assignedCities

}
// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = ""
    let cityName = ""

    if (assignments.length  < 2) {
        for (const assignment of assignments) {

        for (const city of cities) {
            if (city.id === assignment.cityId) {
                // Add the name of the matching city to the string of city names
                cityNames += `${city.name}`
            }
        }
       // After the loop is done, return the string
        return cityNames
    }
}else {
    for (const assignment of assignments) {

        for (const city of cities) {
            if (city.id === assignment.cityId) {
                // Add the name of the matching city to the string of city names
                cityName += `${city.name}`
            }
            
        }
        cityName += ` and `
       // After the loop is done, return the string
        
    }
    // return cityNames = cityName.substring(0,cityName.length -4)
    return cityNames = cityName.slice(0, -4)
}   
}


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    return walkerHTML += "</ul>"

}

