$(document).ready(function () {
	var events = [];

	$(".saveBtn").on("click", function () {
		var text = $(this).siblings(".description").val();
		var time = $(this).parent().attr("id");
		var dateTime = moment().format("dddd, MMMM Do HH:mm");
		events.push({ description: text, time: time, date: dateTime });
		//set items in local storage.
		localStorage.setItem("events", JSON.stringify(events));
		if (text === "") {
			alert("You have not made an entry. Please enter an event or appointment");
		}
	});
	//compare current time to block hours
	var currentTime = moment().hours();
	var hour = $(this).parent().attr("id");
	function timeCheck() {
		//get current time using moment.js
		if (hour < currentTime) {
			$(this).addClass("past");
		} else if (hour == currentTime) {
			$(this).addClass("present");
			$(this).removeClass("past");
		} else {
			$(this).addClass("future");
			$(this).removeClass("present");
			$(this).removeClass("past");
		}
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
	var form = $(this).closest("form");
	$("#reset-button").on("click", function () {
		$(".document").val("");
		localStorage.clear();

	});
});
