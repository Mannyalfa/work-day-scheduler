// Get current date
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//Toggle 12/24 hour time mode
$(function(){
    $('p.mil').hide();// hide it initially
    $('#toggle').on('click', function(){
    $('p.ampm, p.mil').toggle();
    });
});

