// Write your helper functions here!

//require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {//look for key name
    // Here is the HTML formatting for our mission target div.

    let testTarget = document.getElementById('missionTarget');
    let random = Math.round(Math.random() * DestinationInfo.length);
    let mTarget = DestinationInfo[random];
    testTarget.innerHTML = //utilize backtick on line 15
    `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${mTarget.name}</li>
            <li>Diameter: ${mTarget.diameter} </li>
            <li>Star: ${mTarget.star}</li>
            <li>Distance from Earth: ${mTarget.distance}</li>
            <li>Number of Moons: ${mTarget.moons} </li>
        </ol>
        <img src="${mTarget.imageUrl}">`;
}
            
 
function validateInput(testInput) {//case sensitive
    if (testInput === "") {
        return "Empty";

    } else if (isNaN(testInput) === true) {
        return "Not a Number";
    
    } else if (typeof parseInt(testInput) === 'number') {//parseInt always return a number
        return "Is a Number";
    }
 }
    
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {//access it and pass into it from another file
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        if (validateInput(pilot) === "" || validateInput(copilot) === "" || validateInput(fuelLevel) === "" || validateInput(cargoLevel) === "") {
            alert("All fields are required!");
     
        } else {
            list.style.visibility = 'visible';//
            pilotStatus.innerHTML  = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

            let launchStatus = document.getElementById("launchStatus");
            if (fuelLevel < 10000){
               // faultyItems.style.visibility = 'visible';  
                fuelStatus.innerHTML = "Fuel level too low for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
            } else {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "green";
            }

            if (cargoLevel > 10000) {
                list.style.visibility = 'visible';
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
            } else {
                cargoStatus.innerHTML = "Cargo mass low enough for Launch";
                launchStatus.innerHTML = "Shuttle is Ready for launch";
                launchStatus.style.color = "green";
            }
             
            }
        }

 async function myFetch() {
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

    
        return response.json()
          //  planetsReturned = planetsResponse;
         //   return response.json()
       // })
        
    });
       
    return planetsReturned;
}
    
function pickPlanet(planets) {
   let index = Math.floor(Math.random() * planets.length);//return 1 image from the list with a randomly selected index
   return planets [index];
}

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;