// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");//commented out this line

//const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {//DOM (Document Object Model)
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response)
    { 
        response.json().then(function(json) {
            const destination = document.getElementById("destination");
            DestinationInfo.addEventListener("click", function() {
                let index = Math.floor(Math.random()*json.length);
                DestinationInfo.innerHTML = `
                <div>
                    <h3>Planet ${json[index].name}</h3>
                    <img src=${json[index.image]} moons=2></img>
                </div>
                `;
            })
        })
    });
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);//add these call variables
    
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");//
    form.addEventListener("Submit", function(event) {//
       // myFetch();
        let pilotName = document.querySelector("input[name=pilotName]");//
        let copilotName = document.querySelector("input[name=copilotName");//
        let fuelLevel = document.querySelector("input[name=fuelLevel");//
        let cargoLevel = document.querySelector("input[name=cargoLevel");//
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
           // faultyItems.style.visibility = 'visible';//
        }//
});//
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);//
    }).then(function () {//
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetsResponse = pickPlanet(listedPlanets);//
        addDestinationInfo(document, planetsResponse.name, planetsResponse.diameter, planetsResponse.star, planetsResponse.distance, planetsResponse.moons, planetsResponse.imageUrl);//
        
    })
    
 });