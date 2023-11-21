// Write your helper functions here!

require('cross-fetch/polyfill');
//{
  //  "type"; "module";
//}



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  
    let testTarget = document.getElementById('missionTarget');//
  
    console.log(name);//test to see if the planets pop up in the browser
    testTarget.innerHTML = `
    
    
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src="${imageUrl}">`;
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
    
 //make sure it only run when the form is submitted
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {//access it and pass into it from another file
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        list.style.visibility = "visible";
      
      
        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {//is a number, not a number
            alert("All fields are required!");
      
        } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {//is a number, not a number
            alert("Invalid Input.  Please enter your input accordingly.");
        } else {
            list.style.visibility = 'visible';//
            pilotStatus.innerHTML  = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

            let launchStatus = document.getElementById("launchStatus");
            if (fuelLevel < 10000){
               
                fuelStatus.innerHTML = "Fuel level too low for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
            } else {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "green";
                list.style.visibility = 'visible';//
            }

            if (cargoLevel > 10000) {
          
                list.style.visibility = 'visible';
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
             
                launchStatus.style.color = "red";
            } else {
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
            
                launchStatus.style.color = "green";
            }
            if(launchStatus === 'ready') {
                list.style.visibility = 'visible';
                launchStatus.style.color = 'green';
                launchStatus.innerHTML = 'Shuttle is Ready for Launch';
                formSubmission();
            }else {
                launchStatus.style.color = 'red';
                list.style.visibility = 'visible';
                launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
               
            }
            }
        }

 async function myFetch() {
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

    
        return response.json()
         
        
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