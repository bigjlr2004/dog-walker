import { getCities, getPets, getWalkers, getPetCities } from "./database.js"

const pets = getPets()
const walkers = getWalkers()
const cities = getCities()
const petCities = getPetCities()


document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        /*
        the code above allows us to capture what was clicked by the mouse
        the code below checks to see if the html element that was clicked
        has an id assigned to it that starts with pet    
        */

        if(itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")
            /*
            the code above splits the id of the html element
            into an array and stores the portion after the -- 
            in a variable called petId
            */

            /*
            the code above iterates through the pets database
            the code below looks for a match between the pet object id property and the 
            petId split from the html element. If a match is found a window alert message is displayed
            with the pet name property from the pet object
            */ 
           let matchingPet = null
            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                           matchingPet = pet   
                    }
                   
                }
                let matchingWalker = null
                for (const walker of walkers) {
                    if(matchingPet.walkerId === walker.id) {
                        matchingWalker = walker
                    }
                }
                window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
            }
        }
    
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

export const dogWalkingDisplay = () => {
    let matchingCity = []
    let displayHtml = "<ul>"
        //iterate through each dog to
    for (const pet of pets) {
        for (const city of cities) {
            for (const petCity of petCities){ 
                if(petCity.cityId === city.id && pet.id === petCity.petId) {
                 matchingCity.cityName = city.name
              
            }
            }
        }
        for(const walker of walkers)
            if(pet.walkerId === walker.id){
                matchingCity.walkerName = walker.name
            }
            displayHtml += `
            <li>
            ${pet.name} is being walked by
             ${matchingCity.walkerName} in ${matchingCity.cityName}
            </li>
            `
    }
        
    return displayHtml += '</ul>'

}

