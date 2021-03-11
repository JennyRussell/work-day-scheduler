let currentDay = $("#currentDay");
let hour = $(".hour");
let content = $(".description");


let today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

let currentHour = moment().format("hA");

function matchHourValues() {

    $('.description').each(function(i, obj) {

        if (i == 2) {
            $(this).addClass("present");
        }




    });


};

matchHourValues();



console.log(currentHour);