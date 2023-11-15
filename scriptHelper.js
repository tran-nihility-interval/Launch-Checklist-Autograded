// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {//look for key name
    // Here is the HTML formatting for our mission target div.
    //deleted /*
   // fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => //
    //    response.json()).then(addDestinationInfo => {

            let testTarget = document.getElementById('missionTarget');
            let random = Math.random()
            let target = addDestinationInfo[random];
        
            testTarget.innerHTML = //utilize backtick on line 15
               
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${target.name}</li>
                     <li>Diameter: ${target.diameter} </li>
                     <li>Star: ${target.star}</li>
                     <li>Distance from Earth: ${target.distance}</li>
                     <li>Number of Moons: ${target.moons} </li>
                 </ol>
                 <img src="${target.image}">`
                }//);
           // }
 
//}
 
function validateInput(testInput) {//case sensitive
    if (testInput === true) {
    return "Is a Number";

    } else if (isNaN(testInput) === true) {
        return "Not a Number";
    
    } else if (testInput === "") {
        return "Empty";
    }
 }
    
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {//access it and pass into it from another file
    let form = document.querySelector("form");//
    form.addEventListener("Submit", function(event) {//
        let pilotName = document.querySelector("input[name=pilotName]");//
        let coPilotName = document.querySelector("input[name=coPilotName");//
        let fuelLevelL = document.querySelector("input[name=fuelLevelL");//
        let cargoMassKg = document.querySelector("input[name=cargoMassKg");//
        if (pilotName.value === "" || coPilotName.value === "" || fuelLevelL.value === "" || cargoMassKg.value === "") {
            alert("All fields are required!");//
            //stop the form submission
            event.preventDefault();//
        }//

    });//
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         
    });
}
    // return planetsReturned;

 
 function pickPlanet(planets) {
   // let pickPlanet = Math.random(listedPlanets);
 }

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;