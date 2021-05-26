$(document).ready(function () {
var events = [];

//Set saveBtn/click listener for text input
$(".saveBtn").on("click", function () {
//Get values
var text = $(this).siblings(".details").val();
var time = $(this).parent().attr("id");
var dateAdd = moment().format("dddd, MMMM Do");

events.push({description: value, time: time, date: dateAdd});

//Store time(s) in local storage
localStorage.setItem(time, text);
});
// Set Rows and detailed text area
$("#9hr .details").val(localStorage.getItem("#9hr"));
$("#10hr .details").val(localStorage.getItem("#10hr"));
$("#11hr .details").val(localStorage.getItem("#11hr"));
$("#12hr .details").val(localStorage.getItem("#12hr"));
$("#13hr .details").val(localStorage.getItem("#13hr"));
$("#14hr .details").val(localStorage.getItem("#14hr"));
$("#15hr .details").val(localStorage.getItem("#15h"));
$("#16hr .details").val(localStorage.getItem("#16hr"));
$("#17hr .details").val(localStorage.getItem("#17hr"));


function TrackHrs() {
//get current number of hours.
var currentHour = moment().hour(); // use of moment.js


//Toggle 12/24 hour time mode
$(function(){
$('p.mil').hide();// hide it initially
$('#toggle').on('click', function(){
$('p.ampm, p.mil').toggle();
});
});

// Display current day using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));