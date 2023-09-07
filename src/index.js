import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeIndex from './bikeindex.js';

async function searchBike(make, location, distance) {
  const response = await BikeIndex.searchBike(make, location, distance);
  if (response) {
    outputBike(response);
  } else {
    outputError(response);
  }
}

// UI Logic

function outputBike(response) {
  const showResponse = document.querySelector('#showResponse');
  showResponse.innerHTML = ''; 
  
  for (let i = 0; i < response.bikes.length; i++) {
    document.querySelector('#showResponse').innerHTML += 
  `<div class="box"> <h5>${response.bikes[i].frame_colors[0]} ${response.bikes[i].title}</h5>
   Location stolen: ${response.bikes[i].stolen_location} <br />
   Date stolen: ${new Date(response.bikes[i].date_stolen * 1000).toLocaleString()}
   <img class="round" src=${response.bikes[i].thumb} width="250px"> <br /> <br /></div>`;
  }
}

function outputError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the data for
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const make = document.querySelector('#bike').value;
  document.querySelector('#bike').value = null;
  const location = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  const distance = document.querySelector('#distance').value;
  document.querySelector('#distance').value = null;
  searchBike(make, location, distance);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});