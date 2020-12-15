// Write your JavaScript code here!
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
      } else if ((typeof pilotNameInput.value) != "string"
         || (typeof copilotNameInput.value) != "string"
         || isNaN(fuelLevelInput.value) == true
         || isNaN(cargoMassInput.value) == true){
         alert("Invalid Input!! Check Data types.");         
      } else if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready to launch`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready to launch`;         
      } else if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready to launch`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready to launch`;         
      } else {       
         document.getElementById("fuelStatus").innerHTML = "There is enough fuel for the journey";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "Green";  
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready to launch`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready to launch`;       
      }
      event.preventDefault();
   })   

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      return response.json();        
   }).then(function(json){
         console.log(json);
         const missionTarget = document.getElementById('missionTarget');
         let missionTemplate = '';
         let rand = Math.floor(Math.random() * 6);

         console.log(json[rand])
         missionTemplate += `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[rand].name}</li>
            <li>Diameter: ${json[rand].diameter}</li>
            <li>Star: ${json[rand].star}</li>
            <li>Distance from Earth: ${json[rand].distance}</li>
            <li>Number of Moons: ${json[rand].moons}</li>
         </ol>
         <img src="${json[rand].image}"></img>`
         missionTarget.innerHTML = missionTemplate;         
     });      
});

// Code to show ALL missions.
// for (mission of json) {
//    console.log(mission)
//    missionTemplate += `<h2>Mission Destination</h2>
//    <ol>
//       <li>Name: ${mission.name}</li>
//       <li>Diameter: ${mission.diameter}</li>
//       <li>Star: ${mission.star}</li>
//       <li>Distance from Earth: ${mission.distance}</li>
//       <li>Number of Moons: ${mission.moons}</li>
//    </ol>
//    <img src="${mission.image}"></img>`
// }

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