// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");//commented out this line

//const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {//DOM (Document Object Model)
 
//     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);//add these call variables
    
//     let list = document.getElementById("faultyItems");
//     let form = document.querySelector("form");//
//     form.addEventListener("Submit", function(event) {
//         event.preventDefault();//
//         onsubmit = (event) => {};//
//         let pilotName = document.querySelector("input[name=pilotName]");//
//         let copilotName = document.querySelector("input[name=copilotName");//
//         let fuelLevel = document.querySelector("input[name=fuelLevel");//
//         let cargoLevel = document.querySelector("input[name=cargoLevel");//
//         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
//             alert("All fields are required!");
//             event.preventDefault();
//            // faultyItems.style.visibility = 'visible';//
//         }//
// });//
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);//
    }).then(function () {//
        console.log(listedPlanets);//

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetsResponse = pickPlanet(listedPlanets);//
        console.log(planetsResponse);
        addDestinationInfo(document, planetsResponse.name, planetsResponse.diameter, planetsResponse.star, planetsResponse.distance, planetsResponse.moons, planetsResponse.image);//
        
    })     
//     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);//add these call variables
    
//     let list = document.getElementById("faultyItems");
//     let form = document.querySelector("form");//
//     form.addEventListener("Submit", function(event) {
//         event.preventDefault();//
//         onsubmit = (event) => {};//
//         let pilotName = document.querySelector("input[name=pilotName]");//
//         let copilotName = document.querySelector("input[name=copilotName");//
//         let fuelLevel = document.querySelector("input[name=fuelLevel");//
//         let cargoLevel = document.querySelector("input[name=cargoLevel");//
//         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
//             alert("All fields are required!");
//             event.preventDefault();
//            // faultyItems.style.visibility = 'visible';//
//         }//
// });
formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);//add these call variables
    
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");//
    form.addEventListener("submit", function(event) {
        alert("submit clicked");
        //event.preventDefault();//
       // onsubmit = (event) => {};//
    //    window.addEventListener("load", function() {
    //     let form = document.querySelector("form");
    //     form.addEventListener("submit", function(event) {
    //     let usernameInput = document.querySelector("input[name=username]");
    //     let teamName = document.querySelector("input[name=team]");
    //     if (usernameInput.value === "" || teamName.value === "") {
    //         alert("All fields are required!");
    //         // stop the form submission
    //         event.preventDefault();
    //     }
    //     });
    // });//check out constant change in "react forms lecture"
        let pilotData = document.querySelector("input[name=pilotName]");//
        let pilot = pilotData.value;// check out form lecture again -need to have 2 separate key value pairs
        let copilotData = document.querySelector("input[name=copilotName]");//
        let copilot = copilotData.value;//
        let fuelData = document.querySelector("input[name=fuelLevel]");//
        let fuelLevel = Number(fuelData.value);
        let cargoData = document.querySelector("input[name=cargoLevel]");//
        let cargoLevel = Number(cargoData.value);
        //if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === Number ("") || cargoLevel.value === Number ("")) {
        //    alert("All fields are required!");
            event.preventDefault();
           // faultyItems.style.visibility = 'visible';//
        })//
});//
    
 //});