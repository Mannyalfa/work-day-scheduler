$(document).ready(function () {
	var events = [];
	//pull events from local storage
	var loadStorage = localStorage.getItem("events");
	var obj = JSON.parse(loadStorage);
	//load events in textarea
	function loadEvents() {
		//for loop through all time blocks to load block time and text area
		for (i = 9; i <= 17; i++) {
			var tmp = i.toString();
			//for loop for array of "event"
			for (j = 0; j < obj.length; j++) {
				//checking if event time is equal to current time
				if (obj[j].time == tmp) {
					var storeId = "#" + i
					//append event to text area (fills in "description")
					$(storeId).children("textarea").append(obj[j].description);
				}
			}
		}
	}
	//if loadstorage empty, load from storage
	if (loadStorage) {
		loadEvents();
	}
	//save button for event/appointment entries
	$(".saveBtn").on("click", function () {
		var text = $(this).siblings(".description").val();
		var time = $(this).parent().attr("id");
		/*var dateTime = moment().format("dddd, MMMM Do HH:mm");*/
		events.push({ description: text, time: time });
		//set items in local storage.
		localStorage.setItem("events", JSON.stringify(events));
		console.log(events);
		//empty field alert
	});
	//compare current time to block hours

	//time block array
	const timeBlockArr = [
		$("#9"),
		$("#10"),
		$("#11"),
		$("#12"),
		$("#13"),
		$("#14"),
		$("#15"),
		$("#16"),
		$("#17"),
	];

	function timeCheck() {
		//get current time using moment.js
		for (var i = 0; i < timeBlockArr.length; i++) {
			var currentTime = moment().hours();
			var hour = parseInt($(".time-block")[i].id);
			//get array of elements and loop over array
			var currentElem = $(".time-block")[i];
			if (hour < currentTime) {
				currentElem.classList.add("past");
			} else if (hour === currentTime) {
				currentElem.classList.add("present");
				currentElem.classList.remove("past");
			} else {
				currentElem.classList.add("future");
				currentElem.classList.remove("present");
				currentElem.classList.remove("past");
			}
		}
	}
	//initiate time check for past/present/future events every 60 seconds
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

	//toggle between 12 and 24 hour formats(includes seconds to check continuous update)
	$(function () {
		$("p.mil").hide();
		$("#currentAlt").hide();
		$("#toggle").on("click", function () {
			$("#currentAlt, #currentDay").toggle();
			$("p.ampm, p.mil").toggle();
		});
	});

	//resets local storage and text boxes
	$("#reset-button").on("click", function () {
		$(".description").val("");
		localStorage.clear();
	});
});
