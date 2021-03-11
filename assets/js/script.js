let currentDay = $("#currentDay");
let hour = $(".hour");
let content = $(".description");


let today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// gets current hour and sets the format
let currentHour = moment().format("h A");

// key value pair array for local storage
let timeEvents = [
    { "time": "9 AM", "event": "" },
    { "time": "10 AM", "event": "" },
    { "time": "11 AM", "event": "" },
    { "time": "12 PM", "event": "" },
    { "time": "1 PM", "event": "" },
    { "time": "2 PM", "event": "" },
    { "time": "3 PM", "event": "" },
    { "time": "4 PM", "event": "" },
    { "time": "5 PM", "event": "" }

]

// function to load description from local storage to make sure description persists upon reloading
function loadLocalStorage() {
    let localTimeEvent = JSON.parse(localStorage.getItem("timeEvents"));
    // if there is local storage sets timeEvents to localTimeEvents
    if (localTimeEvent) {
        timeEvents = localTimeEvent;
    }
}

// function to save to local storage
// key value pairs time and event
function updateLocalStorage(time, event) {

    for (var i in timeEvents) {
        // if the time key is equal to the eventTime, save the event
        if (timeEvents[i].time === time) {
            timeEvents[i].event = event;
            break;
        }
    }

    localStorage.setItem("timeEvents", JSON.stringify(timeEvents));
}


// matches the currentHour values to the hour block and changes the color of the description div
function matchHourValues() {
    loadLocalStorage();
    let isPast = true;

    $('.input-group').each(function(i, obj) {

        let hourElement = $(obj).children(".hour")[0];
        let descriptionInput = $(obj).children(".description")[0];
        let saveBtn = $(obj).children(".saveBtn")[0];
        let hourElementTime = hourElement.textContent.trim()[0];

        if (isPast) {
            $(descriptionInput).addClass("past");
        } else {
            $(descriptionInput).addClass("future");
        }
        let time = hourElement.textContent.trim();


        if (time === currentHour) {
            $(descriptionInput).addClass("present");
            isPast = false;
        }

        if (timeEvents[i].event != "") {
            $(descriptionInput).val(timeEvents[i].event);
        }

        // saves description to local storage on click
        $(saveBtn).click(function() {
            updateLocalStorage(time, $(descriptionInput).val())
        });
    });
};

matchHourValues();