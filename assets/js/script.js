// Get current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Toggle 12/24 hour time mode
$(function(){
    $('p.mil').hide();// hide it initially
    $('button').on('click', function(){
    $('p.ampm, p.mil').toggle();
    });
});

