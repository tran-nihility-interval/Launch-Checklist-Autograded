// Write your JavaScript code here!

const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {//DOM (Document Object Model)
    formSubmission
    //let form = document.querySelector("form");//
    form.addEventListener("Submit", function(event) {//
        let list = document.getElementById('faultyItems');
        let launchStatus=document.getElementById('launchStatus');
        let pilotStatus=document.getElementById('pilotStatus');
        let copilotStatus=document.getElementById('copilotStatus');
        let pilotName = document.querySelector("input[name=pilotName]");//
        let coPilotName = document.querySelector("input[name=coPilotName");//
        let fuelLevelL = document.querySelector("input[name=fuelLevelL");//
        let cargoMassKg = document.querySelector("input[name=cargoMassKg");//
        if (pilotName.value === "" || coPilotName.value === "" || fuelLevelL.value === "" || cargoMassKg.value === "") {
            alert("All fields are required!");//
            //stop the form submission
            event.preventDefault();//
        }//
        launchStatus = "Shuttle Not Ready for Launch";
        pilotStatus = `${pilotName} is ready for Launch`;//use template literal and back tick


    });//

   
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(json);//
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
       // console.log(listedPlanets);//comment this out too
    }).then(function () {//consider getting rid of the whole line
        //console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        result = pickPlanet(listedPlanets);
    })
    
 });