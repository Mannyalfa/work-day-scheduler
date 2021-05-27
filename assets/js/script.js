
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd MMMM Do, YYYY hh:mm A"));
    $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 
    //set items in local storage.
    localStorage.setItem(time, text);
    })
    //load data from LocalStorage.
    $("#9hr .description").val(localStorage.getItem("9hr"));
    $("#10hr .description").val(localStorage.getItem("10hr"));
    $("#11hr .description").val(localStorage.getItem("11hr"));
    $("#12hr .description").val(localStorage.getItem("12hr"));
    $("#13hr .description").val(localStorage.getItem("13hr"));
    $("#14hr .description").val(localStorage.getItem("14hr"));
    $("#15hr .description").val(localStorage.getItem("15hr"));
    $("#16hr .description").val(localStorage.getItem("16hr"));
    $("#17hr .description").val(localStorage.getItem("17hr"));

    function trackHours() {
    //get current hour.
    var currentHour = moment().hour();

    // loop time slots
    $(".time-slot").each(function () {
    var slotHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log( slotHour, currentHour)

    //check time slots
    if (slotHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
    }
    else if (slotHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
    }
    else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
    }
    })
    }
    trackHours(); //re-run function
});

//Display current time in 12 hour format
setInterval(function () {
$("#currentDay").text(moment().format("dddd MMMM Do h:mm a"));
}, 1000)
//Display current time in 24 hour format
setInterval(function () {
$("#currentAlt").text(moment().format("dddd DD MMMM HH:mm:ss"));
}, 1000)

//Toggle 12/24 hour time mode
$(function(){
$('p.mil').hide();
$('#currentAlt').hide();
$('#toggle').on('click', function(){
$('#currentAlt, #currentDay').toggle();
$('p.ampm, p.mil').toggle();
});
});

//Delete session storage and all user text
$("#reset-buttton").on('click', function(){
localStorage.clear();
});
    
    
