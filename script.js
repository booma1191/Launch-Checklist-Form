// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name = copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" 
         || copilotNameInput.value === ""
         || fuelLevelInput.value === ""
         || cargoMassInput.value === ""){
         alert("All fields are required!!!");
      }
      if ((typeof pilotNameInput.value) != "string"
         || (typeof copilotNameInput.value) != "string"
         || isNaN(fuelLevelInput.value) == true
         || isNaN(cargoMassInput.value) == true){
         alert("Invalid Input!! Check Data types.");
      }

      //document.getElementById("faultyItems").style.visibility = "visible";

      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready to launch`;
      document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotNameInput.value} is ready to launch`;
      if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";

      }


   })
});