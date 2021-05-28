//
$(document).ready(function () {
	var events = [];

	$(".saveBtn").on("click", function () {
		var text = $(this).siblings(".description").val();
		var time = $(this).parent().attr("id");
		var dateTime = moment().format("dddd, MMMM Do HH:mm");
		events.push({ description: text, time: time, date: dateTime });
		//set items in local storage.
		localStorage.setItem("events", JSON.stringify(events));
	});

	function timeCheck() {
		//get current hour
		var currentHour = moment().hour();
		console.log("hello");
		//check time blocks
		$(".time-block").each(function () {
			var blockHour = parseInt($(this).attr("id").split("-")[1]);
			console.log(blockHour);
			if (blockHour < currentHour) {
				$(this).addClass("past");
			} else if (blockHour === currentHour) {
				$(this).addClass("present");
			} else {
				$(this).addClass("future");
			}
		});
	}

	timeCheck();
	var timeLeft = 60;
	function getTime() {
		setInterval(function () {
			timeLeft--;

			if (timeLeft === 0) {
				timeCheck();
				timeLeft = 60;
			}
		}, 1000);
	}

	getTime();

	//reset for loop

	/*var currentDay = moment().format("dddd, MMMM Do");
for(var i = 0; i < events.length; i++) {
if(currentDay.isAfter(events[i].date)) {
events[i].description = "";
events[i].time = "";
events[i].date = "";
events.length = 0;
}
}
 // load any saved data from localStorage
var savedEvents = JSON.parse(localStorage.getItem("events"));

if (savedEvents !== null) {
events = savedEvents;
}
for(var i = 0; i < events.length; i++) {
var savedDescription = events[i].description;
$("#" + events[i].time).children(".description").text(savedDescription);
}
*/

	//Display current time in 12 hour format
	setInterval(function () {
		$("#currentDay").text(moment().format("dddd MMMM Do h:mm a"));
	}, 1000);

	//Display current time in 24 hour format
	setInterval(function () {
		$("#currentAlt").text(moment().format("dddd DD MMMM HH:mm:ss"));
	}, 1000);

	//Toggle 12/24 hour time mode
	$(function () {
		$("p.mil").hide();
		$("#currentAlt").hide();
		$("#toggle").on("click", function () {
			$("#currentAlt, #currentDay").toggle();
			$("p.ampm, p.mil").toggle();
		});
	});

	//Delete session storage and all user text
	$("#reset-button").on("click", function () {
		localStorage.clear();
	});
});
