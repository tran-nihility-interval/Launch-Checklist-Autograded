// Write your JavaScript code here!

const { addDestinationInfo } = require("./scriptHelper");

//const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {//DOM (Document Object Model)
    formSubmission();
    preventDefault();
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");//
    form.addEventListener("Submit", function(event) {//
        let pilotName = document.querySelector("input[name=pilotName]");//
        let copilotName = document.querySelector("input[name=copilotName");//
        let fuelLevel = document.querySelector("input[name=fuelLevel");//
        let cargoLevel = document.querySelector("input[name=cargoLevel");//
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
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
        let planets = pickPlanet(listedPlanets);
        addDestinationInfo();
        
    })
    
 });