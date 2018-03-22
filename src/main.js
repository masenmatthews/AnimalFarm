import { Farm } from './../js/farm.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

// Welcome screen

  $("form#name-input").submit(function(event) {
    event.preventDefault();

    let name = $("input#name").val();
    let animalName = $("input#animalName").val();
    let animal = new Farm(animalName);

    animal.setHunger();
    animal.setSleep();

  // Main interface

  $("#welcome-message").text("Welcome to Animal Farm, " + name + ". Don't let your animal, " + animalName + " die!");

  $("form#name-input").hide();
  $("#main-interface").fadeIn();

  // Buttons

  $("button#feed").click(function() {
    animal.feed()
    console.log(animal.food);
  });

  $("button#rest").click(function() {
    animal.sleep()
    console.log(animal.rest);
    animal.isAnimalDead();
  });

  $("button#checkFood").click(function() {
    animal.checkHunger()
    console.log(animal.food);
    animal.isAnimalDead();
  });

  $("button#checkRest").click(function() {
    animal.checkSleep()
    console.log(animal.rest);
    animal.isAnimalDead();
  });

  $("button#checkHealth").click(function() {
    animal.checkHealth()
    console.log(animal.health);
    animal.isAnimalDead();
  });

    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64c36da6cfd3e4e0bd5f8ac6d9af37d4`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        },
      });
    });
  });
});
