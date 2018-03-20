import {Farm} from '../js/farm.js';
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
  animal.feed();
});

$("button#rest").click(function() {
  animal.rest();
});

$("button#checkFood").click(function() {
  animal.checkHunger();
});

$("button#checkRest").click(function() {
  animal.checkRest();
});

$("button#checkHealth").click(function() {
  animal.checkHealth();
});

});
});
